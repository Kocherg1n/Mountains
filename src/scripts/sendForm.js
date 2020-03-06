import Inputmask from 'inputmask';
import formValidate from './validate.js';

sendForm({
    form: document.querySelector('.j-form')
});

export default function sendForm(options) {
    const phoneMask = '+7 999 99-99-99';
    const form = options.form;
    const inputs = form.querySelectorAll('.js-input');
    const action = form.action;
    const method = form.method;
    const activeClass = 'is-active';
    inputs.forEach((input) => {
        input.addEventListener('focus', addFocusToInput);
        input.addEventListener('blur', removeFocusFromInput);
        if (input.name === 'phone')
            putPhoneMask(input);
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        let result = true;
        const valResult = formValidate({
            inputs: inputs
        });
        for (const field in valResult) {
            if (valResult[field] === false)
                result = false;
        }
        if (result === true)
            submitForm();
    });

    function putPhoneMask(input) {
        const inputmask = new Inputmask({
            'mask': phoneMask,
            showMaskOnHover: false
        });
        inputmask.mask(input);
    }


    function addFocusToInput() {
        const parent = this.parentElement;
        parent.classList.add(activeClass);
    }

    function removeFocusFromInput() {
        const parent = this.parentElement;
        parent.classList.remove(activeClass);
        this.value.length === 0 ?
            parent.classList.remove('is-full') :
            parent.classList.add('is-full');
    }

    function submitForm() {
        const formData = new FormData(form);
        formData.append('name', 'fsdf');
        formData.append('phone', '84444444444');
        formData.append('comment', 'resfsdf');
        formData.append('to', 'olbolot@gmail.com');
        fetch(action, {
                method: method,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: formData
            })

            .then(response => {
                if (response.ok)
                    response.json();
            })
            .then(() => clearForm())
            .catch(error => console.log(error));
    }

    function clearForm() {
        inputs.forEach((input) => input.value = '');
    }
}
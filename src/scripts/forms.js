// mainForm

const mainForm = document.querySelector('#mainForm');
const mainSendButton = document.querySelector('#mainSendButton');
const mainError = document.querySelector('#error')

mainSendButton.addEventListener('click', e => {
    e.preventDefault();

    if (validateForm(mainForm)) {

    }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = true;
    }
    if (!validateField(form.elements.email)) {
        valid = true;
    }
    if (!validateField(form.elements.text)) {
        valid = true;
    }
    return valid;
    // console.log('valid = true');
}

function validateField(field) {
    field.previousSibling.textContent = field.validationMessage;
    field.previousSibling.style.display = "inline-block";
    return field.checkValidity();
};
<template lang="pug">
.wrap
  form.work-form(id="workForm" action="http://")
    h3.title.title__form Добавить работы
    hr.hr
    .work-form__content
        .work-form__col
            .work-form__add-img 
                h4.work-form__text Перетащите или загрузите для загрузки изображения
                button.btn-download загрузить
        .work-form__col
            .work-form__row
                label(for="site-name").work-form__label 
                    .work-form-label__title Название
                    input.work-form__input(require id="site-name" type="text" name="text")
                    .error(id="workError")
            .work-form__row
                label(for="link").work-form-label 
                    .work-form-label__title Ссылка
                    input.work-form__input(require id="link" type="text" name="text")
            .work-form__row
                label(for="desc").work-form-label 
                    .work-form-label__title Описание
                    textarea.work-form__textarea(require id="desc" type="text" name="text")
            .work-form__row
                label(for="tag").work-form-label 
                    .work-form-label__title Добавление тега
                    input.work-form__input(require id="tag")
            .work-form__row
                workform-tags
                .work-form__btns
                  button.btn-cancel(type="reset" ) Отменить
                  button.btn-submit(id="workSendButton" type="submit") Сохранить        
</template>

<script>
import workformTags from "./Tags.vue";
import formButtons from "./FormButtons.vue";

export default {
  data() {
    return {};
  },
  components: {
    workformTags,
    formButtons
  }
};

// formWork - admin

// const workForm = document.querySelector("#workForm");
// const workSendButton = document.querySelector("#workSendButton");
// const workError = document.querySelector("#workError");

// workSendButton.addEventListener("click", function() {
//   console.log("Good job!");
// });
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
@import url("../../styles/variables.pcss");

//// btns
.work-form__btns {
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
}
.btn-submit {
  width: 181px;
  height: 60px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  color: $white;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    background-image: linear-gradient(to right, #3f35cb 0%, #006aed 100%);
  }
}

.btn-cancel {
  width: 181px;
  height: 60px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  color: $purple;
}
/////

.wrap {
  display: flex;
  justify-content: center;
  margin-top: 70px;
}
.work-form {
  width: 100%;
  max-width: 1115px;
  min-width: 740px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  height: 100%;
  padding: 25px;

  @include desktop {
    width: 100%;
    max-width: 100%;
  }

  @include phones {
    min-width: 100%;
  }
}

.work-form__content {
  display: flex;
  justify-content: space-between;

  @include phones {
    flex-direction: column;
    align-items: center;
  }
}

.work-form__col {
  width: 48%;
  margin-top: 50px;

  @include phones {
    width: 100%;
  }
}

.work-form__add-img {
  width: 100%;
  min-height: 270px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  text-align: center;
  background-color: #dee4ed;
}

.work-form__text {
  margin-bottom: 10px;
  font-weight: 600;
  color: $gray;
}

.work-form-label__title {
  font-weight: 600;
  color: $gray;
}

.work-form__input {
  width: 100%;
  border: 0;
  border-bottom: 1px solid black;
  min-height: 40px;
  outline: none;
}

.work-form__textarea {
  height: 150px;
  width: 100%;
  resize: none;
  margin-top: 10px;
  outline: none;
}

.work-form__row {
  margin-bottom: 30px;
}

.btn-download {
  width: 181px;
  height: 50px;
  border-radius: 25px;
  background-color: $white;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  color: $white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 17px;
  &:hover {
    background-image: linear-gradient(to right, #3f35cb 0%, #006aed 100%);
  }
}
</style>
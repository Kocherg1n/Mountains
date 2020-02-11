<template lang="pug">
.wrapp
  form.reviews-form(action="http://")
    h3.title.title__form Добавить отзыв
    hr.hr
    .reviews-form__content
        .reviews-form__col-img
            .reviews-form__add-img 
            button.add-photo Добавить фото
        .reviews-form__col
            .reviews-form__row
                label(for="autor-name").reviews-form__label 
                    .reviews-form-label__title Имя автора 
                    input.reviews-form__input(require id="autor-name")
                label(for="title-autor").reviews-form__label 
                    .reviews-form-label__title Титул автора
                    input.reviews-form__input(require id="title-autor")
            .reviews-form__row-textarea
                label(for="text-row").reviews-form-label 
                    .reviews-form-label__title Отзыв
                    textarea.reviews-form__textarea(require id="text-row")
            .reviews-form__row.buttons
              .reviews-form__btns
                button.btn-cancel(type="reset" ) Отменить
                button.btn-submit(id="workSendButton" type="submit") Сохранить    
</template>

<script>
import formButtons from "./FormButtons.vue";


export default {
  components: {
    formButtons
  }
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/variables.pcss");
@import url("../../styles/mixins.pcss");
.wrapp {
  display: flex;
  justify-content: center;
}
.reviews-form {
  width: 80%;
  max-width: 1115px;
  min-width: 740px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  height: 100%;
  margin-top: 70px;
  padding: 25px;

  @include desktop {
    width: 100%;
    max-width: 100%;
  }

  @include phones {
    min-width: 100%;
  }
}

.reviews-form__label {
  width: 100%;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
}

.reviews-form__content {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  @include phones {
    flex-direction: column;
  }
}

.reviews-form__col {
  width: 70%;
  padding-right: 20%;

  @include phones {
    width: 100%;
    padding: 0;
  }
}

.reviews-form__col-img {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: flex-start;
  align-items: center;

  @include phones {
    padding-bottom: 50px;
  }
}

.reviews-form__add-img {
  background: svg-load("user.svg", fill=#fff, width=100%, height=100%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dee4ed;
}

.reviews-form-label__title {
  font-weight: 600;
  color: $gray;
}

.reviews-form__input {
  width: 100%;
  border: 0;
  border-bottom: 1px solid black;
  min-height: 40px;
  outline: none;
}

.reviews-form__textarea {
  height: 140px;
  width: 100%;
  resize: none;
  margin-top: 10px;
  outline: none;

}

.reviews-form__row {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @include phones {
    flex-direction: column;
  }
}

.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}



.add-photo {
  color: $purple;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  border-bottom: 1px solid transparent;
  &:hover {
  border-bottom: 1px solid $purple;
  transition: $speed;
  }
}

.btn-submit {
  width: 181px;
  height: 60px;
  margin-left: 5px;
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
</style>
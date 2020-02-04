<template lang="pug">
.wrapp
  form.work-form(action="http://")
    h3.title.title__form Добавленные работы
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
                    input.work-form__input(require id="site-name")
            .work-form__row
                label(for="link").work-form-label 
                    .work-form-label__title Ссылка
                    input.work-form__input(require id="link")
            .work-form__row
                label(for="desc").work-form-label 
                    .work-form-label__title Описание
                    textarea.work-form__textarea(require id="desc")
            .work-form__row
                label(for="tag").work-form-label 
                    .work-form-label__title Добавление тега
                    input.work-form__input(require id="tag")
            .work-form__row
                workform-tags
                form-buttons

            
                
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
</script>

<style lang="postcss" scoped>
.wrapp {
  display: flex;
  justify-content: center;
}
.work-form {
  width: 80%;
  max-width: 1115px;
  min-width: 800px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  height: 100%;
  margin-top: 70px;
  padding: 25px;
}

.work-form__content {
  display: flex;
  justify-content: space-between;
}

.work-form__col {
  width: 48%;
  margin-top: 50px;
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
  color: gray;
}

.work-form-label__title {
  font-weight: 600;
  color: gray;
}

.work-form__input {
  width: 100%;
  border: 0;
  border-bottom: 1px solid black;
  min-height: 40px;
}

.work-form__textarea {
  height: 150px;
  width: 100%;
  resize: none;
  margin-top: 10px;
}

.work-form__row {
  margin-bottom: 30px;
}

.btn-download {
  width: 181px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffffff;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 17px;
}
</style>
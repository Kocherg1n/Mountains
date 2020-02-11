

<template lang="pug">
    .wrap
      .reviews__list
        button(type="button").reviews__list-btn
          .btn-add
          .btn-add__text Добавить отзыв
        .reviews__item(v-for="item of 2")
          .autor
            .autor__pic
              img.logo(src="../../images/content/user.jpg")
            .autor__text
              .autor__name Владимир Сабанцев 
              .autor__job Преподаватель 
          .desc
              .desc__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
          .btns
            button(type="button").btn-change Править
            button(type="button").btn-delete Удалить              
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
@import url("../../styles/variables.pcss");

.wrap {
  margin-top: 70px;
}

.hr {
  width: 100%;
  margin-top: 20px;
}
.reviews__item {
  width: 340px;
  height: 380px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  padding: 20px;
  margin-bottom: 20px;
}

.autor {
  display: flex;
  justify-content: flex-start;
}

.autor__pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.autor__name {
  font-weight: 600;
}

.desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__title {
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: 700;
  }
  &__text {
    margin-bottom: 25px;
  }
  &__link {
    color: #383bcf;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    &:hover {
      transition: $speed;
      border-bottom: 1px solid #383bcf;
    }
  }
}

.btns {
  display: flex;
  justify-content: space-between;
}

.reviews__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @include phones {
    justify-content: center;
  }
}
.reviews__list-btn {
  width: 340px;
  height: 380px;
  background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #3f35cb 0%, #006aed 100%);
  }
}

.btn-add {
  width: 150px;
  height: 150px;
  background: transparent;
  border: 1px solid $white;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    background-color: $white;
    width: 2px;
    height: 34px;
  }
  &:before {
    transform: rotate(90deg);
  }
}

.btn-add__text {
  margin-top: 10px;
  color: $white;
  padding: 0 33% 0 33%;
  text-align: center;
  font-size: 18px;
}
/////
.reviews__item {
  width: 340px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.picture {
  height: 30%;
  background-image: url("../../images/content/slide1.png");
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
}

button.btn-change {
  width: 90px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  &:after {
    content: "";
    background: svg-load("pencil.svg", fill=#383bcf, width=100%, height=100%);
    display: block;
    width: 17px;
    height: 17px;
  }
}

button.btn-delete {
  width: 90px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:after {
    content: "";
    background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%);
    display: block;
    width: 15px;
    height: 15px;
  }
}
</style>





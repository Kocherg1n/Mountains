

<template lang="pug">
    .wrap
      .works__list
          button.work__list-btn
            .btn-add
            .btn-add__text Add work
          .works__item(v-for="item of 2")
            .picture
                tags.tags

            .desc
                .desc__title Сайт школы образования
                .desc__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .desc__link-box
                  a.desc__link(href="http://loftschool.ru") https://loftschool.com
            .btns
                button.btn-change Править
                button.btn-delete Удалить
</template>

<script>
import tags from "./Tags.vue";

export default {
  components: {
    tags
  }
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
@import url("../../styles/variables.pcss");

.wrap {
  margin-top: 70px;
}

.works__item {
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
}
.desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  &__title {
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: 700;
  }
  &__text {
    margin-bottom: 25px;
  }
  &__link {
    color: $purple;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    &-box {
      display: inline-block;
    }
    &:hover {
      transition: $speed;
      border-bottom: 1px solid $purple;
    }
  }
}

.btns {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.works__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @include phones {
    justify-content: center;
  }
}
.work__list-btn {
  width: 340px;
  height: 550px;
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
///////
.btn-add__text {
  margin-top: 10px;
  color: $white;
  padding: 0 23% 0 23%;
  text-align: center;
  font-size: 18px;
}
/////
.works__item {
  width: 340px;
  height: 550px;
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





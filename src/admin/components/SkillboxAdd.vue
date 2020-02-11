<template lang="pug">
.wrap
  div.box
    input.skill(
        placeholder="Новый навык"
      )
    .skill-wrap
      input.skill-digit(placeholder="100")
  button(type='button').btn-add

</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
@import url("../../styles/variables.pcss");

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-wrap {
  position: relative;
  &:after {
    position: absolute;
    content: "%";
    top: 0;
    right: 0;
  }
}

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-left: 130px;
  font-weight: 600;
  border: 0;
  border-bottom: 1px solid black;
  margin-right: 20px;

  @include m-phones {
    margin-left: 0;
  }
}

.skill {
  width: 200px;
  border: 0;
  font-weight: 600;
  outline: none;
  @include m-phones {
    width: 70%;
  }
}

.skill-digit {
  width: 35px;
  border: none;
  margin-right: 10px;
}

.btn-add {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  margin-top: 28px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    color: $white;
    display: block;
    height: 3px;
    width: 14px;
    background-color: $white;
  }
  &:after {
    transform: rotate(90deg);
  }
}
</style>
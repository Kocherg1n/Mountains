<template lang="pug">
  div.wrap
    input.input(
        placeholder="Новый навык"
      )
    .skill-digit 100 
    .skill-percent %
    button.btn-add

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
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-left: 130px;
  font-weight: 600;
}

.input {
  width: 200px;
  border: 0;
  border-bottom: 1px solid black;
  font-weight: 600;
  padding-bottom: 10px;
  outline: none;
}

.skill-digit {
  width: 35px;
  border-bottom: 1px solid black;
}

.skill-percent {
  width: 15px;
  margin-left: -28px;
  border-bottom: 1px solid black;

  @include tablets {
    margin-left: -20px;
  }
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
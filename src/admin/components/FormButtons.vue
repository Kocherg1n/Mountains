<template lang="pug">
  .wrap
    button.btn-cancel(type="button") Отменить
    button.btn-submit(type="button") Сохранить
</template>

<script>
</script>

<style lang="postcss" scoped>
@import url("../../styles/variables.pcss");

.wrap {
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
</style>
<template lang="pug">
  .wrap
    button.btn-cancel Отменить
    button.btn-submit Сохранить
</template>

<script>
</script>

<style lang="postcss" scoped>
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
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}

.btn-cancel {
  width: 181px;
  height: 60px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  color: #3f35cb;
}
</style>
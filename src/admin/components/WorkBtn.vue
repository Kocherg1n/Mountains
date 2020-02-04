
<template lang="pug">
  .wrap
    button.btn-add 
    .btn-add__text Добавить работу
</template>

<script>
</script>

<style lang="postcss" scoped>
.wrap {
  width: 340px;
  height: 550px;
  background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btn-add {
  width: 150px;
  height: 150px;
  background: transparent;
  border: 1px solid white;
  border-radius: 50%;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    background-color: white;
    width: 2px;
    height: 34px;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    background-color: white;
    width: 2px;
    height: 34px;
    bottom: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    transform: rotate(90deg);
  }
}

.btn-add__text {
  margin-top: 10px;
  color: white;
  padding: 0 33% 0 33%;
  text-align: center;
  font-size: 18px;
}
</style>





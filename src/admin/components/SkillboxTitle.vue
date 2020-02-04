<template lang="pug">
  div.wrap
    .box
      input.input(
        placeholder="Название новой группы"
      )
    .controls
      button.accept-btn
      button.cancel-btn
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="postcss" scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input {
  width: 270px;
  border: 0;
  border-bottom: 1px solid black;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
}

.controls {
  display: flex;
}

.accept-btn {
  background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%);
  width: 12px;
  height: 12px;
  margin-right: 15px;
}

.cancel-btn {
  background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%);
  width: 10px;
  height: 10px;
}
</style>
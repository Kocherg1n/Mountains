
<template lang="pug">
  div.tag__list
      button(type="button").tag__item(v-for="i in tags") 
          .tag__title {{i}}
          .tag__close
</template>

<script>
export default {
  data() {
    return {
      tags: ["HTML", "CSS", "JS"]
    };
  }
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/variables.pcss");

.tag__list {
  display: flex;
  flex: flex-start;
}

.tag__item {
  outline: none;
  margin-right: 15px;
  height: 31px;
  border-radius: 15px;
  background-color: $light-gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 15px;
  &:last-child {
    margin-right: 0;
  }
}

.tag__close {
  background: svg-load("remove.svg", fill=black, width=100%, height=100%);
  width: 10px;
  height: 10px;
  margin-left: 10px;
}
</style>





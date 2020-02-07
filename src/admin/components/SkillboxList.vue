<template lang="pug">
ul.skill-list
  li.skill-item(v-for="item in 4")
    .skill-name javascript
    .skill-digit 100 
    .skill-percent %
    button.btn-change 
    button.btn-delete  

  
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
.skill-list {
  font-weight: 600;
}
.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.skill-name {
  flex-grow: 1;
  /* border: 0;
  border-bottom: 1px solid black; */
}
.skill-digit {
  width: 35px;
}
.skill-percent {
  margin-right: 50px;
  width: 30px;
}
button.btn-change {
  background: svg-load("pencil.svg", fill=#414c63, width=100%, height=100%);
  width: 15px;
  height: 15px;
  margin-right: 15px;
}
button.btn-delete {
  background: svg-load("trash.svg", fill=#414c63, width=100%, height=100%);
  width: 15px;
  height: 15px;
}
</style>
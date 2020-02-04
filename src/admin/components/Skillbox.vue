<template lang="pug">
  div.skillbox
    skillbox-title
    hr.hr
    skillbox-list
    skillbox-add

    
    
    
</template>

<script>
import skillboxTitle from "./SkillboxTitle.vue";
import skillboxList from "./SkillboxList.vue";
import skillboxAdd from "./SkillboxAdd.vue";



export default {
  components: {
    skillboxTitle,
    skillboxList,
    skillboxAdd
  },
  data() {
    return {

    }
  }
};
</script>

<style lang="postcss" scoped>
.skillbox {
  min-width: 525px;
  min-height: 387px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  padding: 25px;
  display: inline-block;
}

.hr {
  margin-top: 20px;
  margin-bottom: 25px;
  opacity: 0.3;
}
</style>
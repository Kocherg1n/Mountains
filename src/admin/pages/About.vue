<template lang="pug">
.wrap
  .title__admin Блок «Обо мне»
  .skillbox-section
    app-skillbox
    app-skillbox
</template>

<script>
import appSkillbox from "../components/Skillbox.vue";

export default {
  data() {
    return {
      components: appSkillbox
    };
  }
};
</script>

<style lang="postcss" scoped>
</style>
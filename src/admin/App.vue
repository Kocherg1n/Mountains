<template lang="pug">
	div
		app-header
		.container
			app-nav
		.container
			app-skillbox
		.work-section
			work-form

			

			


	
</template>

<script>
import appHeader from "./components/Header.vue";
import appNav from "./components/Nav.vue";
import appSkillbox from "./components/Skillbox.vue";
import workForm from "./components/WorkForm.vue";
import WorkBtn from "./components/WorkBtn.vue";

export default {
  components: {
    appHeader,
    appNav,
    appSkillbox,
    workForm,
    WorkBtn
  },
  data() {
    return {};
  }
};
</script>



<style lang="pcss" scoped>
.skillbox-section {
  display: flex;
  justify-content: space-around;
  padding: 0 10% 0 10%;
}
.title__admin {
  display: block;
}
</style>



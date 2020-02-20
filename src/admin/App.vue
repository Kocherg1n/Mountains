<template lang="pug">
	div
		app-header
		.container
			app-nav
			h1.title__admin Блок "Обо мне"
			.skill-section
				app-skillbox(v-for="one of 3")
			.work-section
				work-form
				works-list
			.reviews-section
				reviews-form
				reviews-list

</template>

<script>
import appHeader from "./components/Header.vue";
import appNav from "./components/Nav.vue";
import appSkillbox from "./components/Skillbox.vue";
import workForm from "./components/WorkForm.vue";
import workBtn from "./components/WorkBtn.vue";
import worksList from "./components/WorksList.vue";
import reviewsForm from "./components/ReviewsForm.vue";
import reviewsList from "./components/ReviewsList.vue";

import mixins from "../mixins.pug";

export default {
  components: {
    appHeader,
    appNav,
    appSkillbox,
    workForm,
    workBtn,
    worksList,
    reviewsForm,
    reviewsList
  },
  data() {
    return {};
  }
};
</script>



<style lang="pcss" scoped>
@import url("../styles/mixins.pcss");
@import url("../styles/main2.pcss");

.skill-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-AROUND;

  @include desktop {
    justify-content: space-between;
  }

  @include tablets {
    justify-content: center;
  }
}

.work-section {
  display: flex;
  flex-direction: column;
}

.reviews-section {
  padding-bottom: 50px;
}
</style>



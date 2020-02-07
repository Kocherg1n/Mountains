<template lang="pug">
	nav.nav 
		ul.nav__list
			li.nav__item(v-for="item in nav") 
				a.nav__link(:href="item.link") {{item.page}}
</template>


<script>
export default {
  data() {
    return {
      nav: [
        {
          page: "Обо мне",
          link: ""
        },
        {
          page: "Работы",
          link: "/works"
        },
        {
          page: "Отзывы",
          link: "/reviews"
        }
      ]
    };
  }
};
</script>

<style lang="pcss" scoped>
@import url("../../styles/mixins.pcss");
@import url("../../styles/variables.pcss");

.nav {
  min-height: 77px;
  display: flex;
  align-items: center;
  font-weight: 600;
}

.nav__list {
  display: flex;
}

.nav__item {
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
}

.nav__link {
  border-bottom: 3px solid transparent;
  padding: 25px;
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid $purple;
    color: $purple;
    transition: $speed;
  }
}
</style>


<template lang="pug">
	.header
		.container.header__container
			.header__info
				img.logo(src="../../images/content/user.jpg") 
				.name Юрий Кочергин
				.title Панель администрирования
			.header__btn
				a.btn-quit Выйти
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="pcss" scoped>
@import url("../../styles/mixins.pcss");

.header {
  min-height: 80px;
  background-color: $black;
  color: $white;
  display: flex;
}

.header__container {
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.header__info {
  display: flex;
  align-items: center;
}

.logo {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 20px;

  @include m-phones {
    margin-right: 5px;
  }
}

.name {
  margin-right: 25px;
  font-size: 18px;
  font-weight: 400;

  @include m-phones {
    margin-right: 5px;
  }
}

.title {
  margin-right: 25px;
  color: $gray;
  font-size: 14px;
  font-weight: 400;
}

.btn-quit {
  font-size: 16px;
  font-weight: 400;
  color: $gray;
  text-decoration: underline;
}
</style>


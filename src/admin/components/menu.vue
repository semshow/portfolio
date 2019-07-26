<template lang="pug">
  .admin__menu
    .admin__container
      nav.main-menu
        ul.main-menu__list
          li.main-menu__item
            router-link(
              tag="a"
              to="./pages/about.vue"
            ).main-menu__link.admin__link--active Обо мне 
          li.main-menu__item 
            router-link(
              tag="a"
              to="./pages/works.vue"
            ).main-menu__link Работы 
          li.main-menu__item 
            router-link(
              tag="a"
              to="./pages/reviews.vue"
            ).main-menu__link Отзывы 
</template>
<script>
export default {}
</script>

<style lang="postcss" scoped>
.main-menu {
  min-height: 75px;
}
.main-menu__list {
  width: 375px;
}
.main-menu__item {
  width: 125px;
  margin-right: 0;
}
.main-menu__link {
  display: block;
  text-align: center;
  width: 100%;
  color: #414c63;
  padding: 30px 0 30px 0;
}

.admin__link--active {
  color: #383bcf;
  border-bottom: 3px #383bcf solid;
}
</style>

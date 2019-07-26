<template lang="pug"> 
  header.admin__header
    .admin__container.admin__container--header
      .admin__header-description
        .admin__logo
          //- img(src="../images/content/kovalchuk.jpg").admin__logo-pic
        .admin__header-name Александр Дерменжи
        .admin__header-panelname Панель администрирования
      .admin__header-button
        a.admin__header-link Выйти
</template>
<script>
export default {}
</script>


<style lang="postcss">
@import url('../../styles/mixins.pcss');

.admin__header {
  min-height: 80px;
  background-color: #43436d;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.admin__container {
  margin: 0 auto;
  width: 90%;
}
.admin__container--header {
  display: flex;
  justify-content: space-between;
}

.admin__header-description {
  display: flex;
  align-items: center;
}
.admin__logo {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.admin__logo-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.admin__header-name {
  font-size: 18px;
  color: $white;
  font-weight: 600;
  margin-right: 28px;
}
.admin__header-panelname {
  font-size: 14px;
}
.admin__header-button {
  display: flex;
  align-items: center;
}
.admin__header-link {
  text-decoration: underline;
}
</style>

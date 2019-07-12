<template lang="pug">
  .admin-main
    header.admin__header
      .admin__container.admin__container--header
        .admin__header-description
          .admin__logo
            img(src="../images/content/kovalchuk.jpg").admin__logo-pic
          .admin__header-name Александр Дерменжи
          .admin__header-panelname Панель администрирования
        .admin__header-button
          a.admin__header-link Выйти   
    .admin__menu
      .admin__container
        nav.main-menu
          ul.main-menu__list
            li.main-menu__item
              a.main-menu__link.admin__link--active Обо мне 
            li.main-menu__item 
              a.main-menu__link Работы 
            li.main-menu__item 
              a.main-menu__link Отзывы 
    section.admin__content
      .admin__container
        .admin__content-header
          h1.admin__content-title Блок "Обо мне" 
          a.admin__content-headerbutton Добавить группу
        form.admin__blocks
          .block
            .block__header  
              input(type="text" placeholder="Название новой группы").block__title 
              .block__header__icons
          
</template>
<script>
  export default {}
</script>

<style lang="pcss">
  @import url('../styles/mixins');
  @import url('../styles/main');
  @import url('../styles/layout/base');

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

  .admin__content {
    background-color: #f8f9fe;
    min-height: 973px;
    padding-top: 60px;
  }

  .admin__content-header {
    display: flex;
    margin-bottom: 58px;
  }
  .admin__content-title {
    color: #414c63;
    font-weight: 700;
    font-size: 21px;
    line-height: 21px;
    margin-right: 55px;
  }
  .admin__content-headerbutton {
    display: block;
    color: #383bcf;
    font-weight: 600;
    line-height: 21px;
    padding-left: 35px;
    position: relative;
  }
  .admin__content-headerbutton::before {
    text-align: center;
    color: $white;
    position: absolute;
    left: 0;
    content: '+';
    width: 20px;
    height: 20px;
    background: linear-gradient(to right, #006aed, #3f35cb);
    border-radius: 50%;
  }


</style>
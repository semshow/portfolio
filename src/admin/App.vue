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
          button.add +
          button.admin__content-add-title  Добавить группу
        form.admin__blocks
          .block
            .block__header  
              input(type="text" placeholder="Название новой группы").field.field__name
              .block__header-icons
                button.block__header-icon.icon__tick
                button.block__header-icon.icon__remove
            .block__footer
              input(type="text" placeholder="Новый навык").field.field__skill
              input(type="text" placeholder="100%").field.field__percent
              button.add +
          .block
            .block__header  
              input(type="text" placeholder="Frontend").field.field__name
              .block__header-icons
                button.block__header-icon.icon__tick
                button.block__header-icon.icon__remove
            .block__content 
              table.block__content-table
                - var data = [['Git','100','%'],['Terminal','90','%'],['Gulp', '80','%'],['Webpack','85','%']]
                each row in data
                  tr.block__content-row
                    td.block__content-skill #{row[0]} 
                    td.block__content-level 
                      .block__content-number  #{row[1]} 
                      .block__content-percent #{row[2]} 
                    td.block__content-icons
                      .block__content-pencil   
                      .block__content-bin   
            .block__footer
              input(type="text" placeholder="Новый навык").field.field__skill
              input(type="text" placeholder="100%").field.field__percent
              button.add +
          .block
            .block__header  
              input(type="text" placeholder="Workflow").field.field__name
              .block__header-icons
                button.block__header-icon.icon__tick
                button.block__header-icon.icon__remove
            .block__content 
              table.block__content-table
                - var data = [['HTML5','100','%'],['CSS','90','%'],['Javascript', '80','%'],['Jquery и VueJS','85','%']]
                each row in data
                  tr.block__content-row
                    td.block__content-skill #{row[0]} 
                    td.block__content-level 
                      .block__content-number  #{row[1]} 
                      .block__content-percent #{row[2]} 
                    td.block__content-icons
                      .block__content-pencil   
                      .block__content-bin       
            .block__footer
              input(type="text" placeholder="Новый навык").field.field__skill
              input(type="text" placeholder="100%").field.field__percent
              button.add +



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
  .admin__content-add-title {
    display: inline-block;
    color: #383bcf;
    font-weight: 600;
    line-height: 21px;
    margin-left: 15px;
    position: relative;
    background-color: transparent;
  }

  .add {
    display: inline-flex;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: linear-gradient(to right, #006aed, #3f35cb);
    border-radius: 50%;
  }

  .admin__blocks {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .block {
    width: 48%;
    color: #414c63;
    background-color: white;
    min-height: 390px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 4px 3px 20px 0px rgba(0,0,0,0.1);
    margin-bottom: 28px;
  }

  .block__header {
    height: 58px;
    border-bottom: 1px solid rgba(fffff, 0.3);
    display: flex;
    justify-content: space-between;
  }

  .block__header-icons {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .block__header-icon {
    display: inline-block;
    width: 15px;
    height: 15px;

  }

  .icon__tick {
    background: svg-load(
    "tick.svg",
    fill=#00d70a,
    width=100%,
    height=100%
    )
  }

  .icon__remove {
    background: svg-load(
    "remove.svg",
    fill="#bf2929",
    stroke-width=20,
    width=100%,
    height=100%
    )
  }

  .block__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .field {
    height: 44px;
    padding: 10px;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid black;
  }

  .field__name {
    width: 275px;
  }

  .field__skill {
    width: 216px;
    margin-right: 10px;
  }

  .field__percent {
    width: 73px;
    margin-right: 30px;
  }

  .block__content-table {
    width: 100%;
  }

  .block__content-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .block__content-level {
    display: flex;
    justify-content: space-between;
  }

  .block__content-icons {
    width: 60px;
    display: flex;
    justify-content: space-between;
  }

  .block__content-skill {
    width: 50%;
  }
  .block__content-level {
    width: 12%;
  }

  .block__content-pencil {
    display: inline-block;
    width: 15px;
    height: 15px;
    background: svg-load(
    "pencil.svg",
    fill="#a0a5b1",
    stroke-width=20,
    width=100%,
    height=100%
    )
  }
  .block__content-bin {
    display: inline-block;
    width: 15px;
    height: 15px;
    background: svg-load(
    "trash.svg",
    fill="#a0a5b1",
    stroke-width=20,
    width=100%,
    height=100%
    )
  }

</style>
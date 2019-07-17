<template lang="pug">
  .admin
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
                  a.main-menu__link Обо мне 
                li.main-menu__item 
                  a.main-menu__link.admin__link--active Работы 
                li.main-menu__item 
                  a.main-menu__link Отзывы 
        section.admin__content
          .admin__container
            .admin__content-header
              h1.admin__content-title Блок "Работы" 
            .block.block--works
              .block__header.block__header--works 
                .block__header-title Редактирование работы
              form.edit
                .edit__addfile
                  p.edit__addfile-text Перетащите или загрузите для загрузки изображения
                  button.add.add--load Загрузить
                .edit__description
                  label.field__title Название
                    input(type="text" placeholder="Дизайн сайта для авто салона Porsche").field.field--edit   
                  label.field__title Ссылка
                    input(type="text" placeholder="Дизайн сайта для авто салона Porsche").field.field--edit   
                  label.field__title Описание
                  textarea.edit__textarea Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                  label.field__title Добавление тега
                    input(type="text" placeholder="Jquery, Vue.js, HTML5").field.field--edit  
                  ul.edit__tags
                    li.edit__tag 
                      .edit__tag-text HTML
                      button.edit__tag-cancel
                    li.edit__tag 
                      .edit__tag-text CSS
                      button.edit__tag-cancel
                    li.edit__tag 
                      .edit__tag-text Javascript
                      button.edit__tag-cancel
                  .edit__btns
                    button.edit__btns-cancel Отмена
                    button.add.add--load Сохранить
            .admin__works
              .admin__works-widget
                button.add.add--widget + 
                p.admin__works-widget-text Добавить работу 
              .admin__works-widget.widget 
                .widget__img
                  img(src="../images/content/preview1.jpg")
                  ul.widget__skills
                    li.edit__tag HTML
                    li.edit__tag CSS
                    li.edit__tag JavaScript  
                .widget__content    
                  .widget__title Сайт школы образования  
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
                    
              .admin__works-widget.widget 
                .widget__img
                  img(src="../images/content/preview2.jpg")
                  ul.widget__skills
                    li.edit__tag HTML
                    li.edit__tag CSS
                    li.edit__tag JavaScript  
                .widget__content    
                  .widget__title Сайт школы образования  
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
              .admin__works-widget.widget 
                .widget__img
                  img(src="../images/content/preview3.jpg")
                  ul.widget__skills
                    li.edit__tag HTML
                    li.edit__tag CSS
                    li.edit__tag JavaScript  
                .widget__content    
                  .widget__title Сайт школы образования  
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
              .admin__works-widget.widget 
                .widget__img
                  img(src="../images/content/preview4.jpg")
                  ul.widget__skills
                    li.edit__tag HTML
                    li.edit__tag CSS
                    li.edit__tag JavaScript  
                .widget__content    
                  .widget__title Сайт школы образования  
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
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
                  a.main-menu__link Обо мне 
                li.main-menu__item 
                  a.main-menu__link.admin__link--active Работы 
                li.main-menu__item 
                  a.main-menu__link Отзывы 
        section.admin__content
          .admin__container
            .admin__content-header
              h1.admin__content-title Блок "Работы" 
            .admin__works
              .admin__works-widget.admin__works-widget--works
                button.add.add--widget + 
                p.admin__works-widget-text Добавить работу 
              .admin__works-widget.widget 
                .widget__img
                  img(src="../images/content/preview1.jpg")
                  ul.widget__skills
                    li.edit__tag HTML
                    li.edit__tag CSS
                    li.edit__tag JavaScript  
                .widget__content    
                  .widget__title Сайт школы образования  
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
                    
              .admin__works-widget.widget 
                .widget__img
                  img(src="../images/content/preview2.jpg")
                  ul.widget__skills
                    li.edit__tag HTML
                    li.edit__tag CSS
                    li.edit__tag JavaScript  
                .widget__content    
                  .widget__title Сайт школы образования  
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
              .admin__works-widget.widget 
                .widget__img
                  img(src="../images/content/preview3.jpg")
                  ul.widget__skills
                    li.edit__tag HTML
                    li.edit__tag CSS
                    li.edit__tag JavaScript  
                .widget__content    
                  .widget__title Сайт школы образования  
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
              .admin__works-widget.widget 
                .widget__img
                  img(src="../images/content/preview4.jpg")
                  ul.widget__skills
                    li.edit__tag HTML
                    li.edit__tag CSS
                    li.edit__tag JavaScript  
                .widget__content    
                  .widget__title Сайт школы образования  
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
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
                  a.main-menu__link Обо мне 
                li.main-menu__item 
                  a.main-menu__link Работы 
                li.main-menu__item 
                  a.main-menu__link.admin__link--active  Отзывы 
        section.admin__content
          .admin__container
            .admin__content-header
              h1.admin__content-title Блок "Отзывы" 
            .block.block--addphoto
              .block__header.block__header--works 
                .block__header-title Новый отзыв
              form.edit
                .edit__addphoto
                  .edit__addphoto-block
                  .edit__addphoto-circle
                  button.btn.add__photo-btn Добавить отзыв
                .edit__addphoto-description
                  .edit__addphoto-header
                    label.field__title.field__title--addphoto Имя автора
                      input(type="text" placeholder="Ковальчук Дмитрий").field.field--addphoto 
                    label.field__title.field__title--addphoto Титул автора
                      input(type="text" placeholder="Основатель Loftschool").field.field--addphoto   
                  label.field__title Описание
                  textarea.edit__textarea Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .edit__btns
                    button.edit__btns-cancel Отмена
                    button.add.add--load Сохранить
            .admin__works
              .admin__works-widget.admin__works-widget--addphoto
                button.add.add--widget + 
                p.admin__works-widget-text Добавить работу 
              .admin__works-widget.widget 
                .widget__content    
                  .widget__header
                    .widget__header-img
                      img(src="../images/content/sabantsev.jpg").widget__header-pic
                    .widget__header--title
                      .widget__header-title Владимир Сабанцев 
                      .widget__title-job Преподаватель
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
                    
              .admin__works-widget.widget 
                .widget__content    
                  .widget__header
                    .widget__header-img
                      img(src="../images/content/sabantsev.jpg").widget__header-pic
                    .widget__header--title
                      .widget__header-title Владимир Сабанцев 
                      .widget__title-job Преподаватель
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
              .admin__works-widget.widget 
                .widget__content    
                  .widget__header
                    .widget__header-img
                      img(src="../images/content/sabantsev.jpg").widget__header-pic
                    .widget__header--title
                      .widget__header-title Владимир Сабанцев 
                      .widget__title-job Преподаватель
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
              .admin__works-widget.widget 
                .widget__content    
                  .widget__header
                    .widget__header-img
                      img(src="../images/content/sabantsev.jpg").widget__header-pic
                    .widget__header--title
                      .widget__header-title Владимир Сабанцев 
                      .widget__title-job Преподаватель
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
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
                  a.main-menu__link Обо мне 
                li.main-menu__item 
                  a.main-menu__link Работы 
                li.main-menu__item 
                  a.main-menu__link.admin__link--active  Отзывы 
        section.admin__content
          .admin__container
            .admin__content-header
              h1.admin__content-title Блок "Отзывы" 
            .admin__works
              .admin__works-widget.admin__works-widget--addphoto
                button.add.add--widget + 
                p.admin__works-widget-text Добавить работу 
              .admin__works-widget.widget 
                .widget__content    
                  .widget__header
                    .widget__header-img
                      img(src="../images/content/sabantsev.jpg").widget__header-pic
                    .widget__header--title
                      .widget__header-title Владимир Сабанцев 
                      .widget__title-job Преподаватель
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
                    
              .admin__works-widget.widget 
                .widget__content    
                  .widget__header
                    .widget__header-img
                      img(src="../images/content/sabantsev.jpg").widget__header-pic
                    .widget__header--title
                      .widget__header-title Владимир Сабанцев 
                      .widget__title-job Преподаватель
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
              .admin__works-widget.widget 
                .widget__content    
                  .widget__header
                    .widget__header-img
                      img(src="../images/content/sabantsev.jpg").widget__header-pic
                    .widget__header--title
                      .widget__header-title Владимир Сабанцев 
                      .widget__title-job Преподаватель
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
              .admin__works-widget.widget 
                .widget__content    
                  .widget__header
                    .widget__header-img
                      img(src="../images/content/sabantsev.jpg").widget__header-pic
                    .widget__header--title
                      .widget__header-title Владимир Сабанцев 
                      .widget__title-job Преподаватель
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
          form(action="https://webdev-api.loftschool.com/" method="post").auth  
            .auth__exit  
              button.auth__exit-icon
            .auth__title Авторизация
            .auth__inputs
              .auth__inputs-block
                label(name="name").auth__inputs-title Логин
                input(type="text" name="login" placeholder="Terminator_2000").auth__input.auth__input--login 
              .auth__inputs-block     
                label(name="password").auth__inputs-title Пароль
                input(type="password" name="password" placeholder="*****************").auth__input.auth__input--pass  
            .auth__send    
              button(type="submit").auth__send-btn Отправить      
                        
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

.add--load {
  min-width: 180px;
  min-height: 50px;
  border-radius: 25px;
  text-transform: uppercase;
  font-weight: bold;
}

.add--widget {
  background: transparent;
  border: 1px solid $white;
  min-width: 150px;
  min-height: 150px;
  font-size: 72px;
  font-weight: 300;
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
  box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 28px;
}

.block--works {
  width: 100%;
  padding-top: 0;
}

.block--addphoto {
  width: 100%;
  padding-top: 0;
  padding-bottom: 50px;
}

.block__header {
  min-height: 58px;
  border-bottom: 1px solid rgba(fffff, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.block__header--works {
  min-height: 75px;
  margin-bottom: 50px;
}

.block__header-title {
  font-weight: 700;
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
  background: svg-load('tick.svg', fill=#00d70a, width = 100%, height=100%);
}

.icon__remove {
  background: svg-load(
    'remove.svg',
    fill= '#bf2929',
    stroke-width=20,
    width=100%,
    height=100%
  );
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

.field--addphoto {
  display: block;
  padding-left: 0;
  width: 100%;
}

.field__title--addphoto {
  width: 48%;
}

.field--edit {
  width: 100%;
  margin-bottom: 25px;
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
    'pencil.svg',
    fill= '#a0a5b1',
    stroke-width=20,
    width=100%,
    height=100%
  );
}
.block__content-bin {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: svg-load(
    'trash.svg',
    fill= '#a0a5b1',
    stroke-width=20,
    width=100%,
    height=100%
  );
}

.edit {
  display: flex;
  justify-content: space-between;
}

.edit__addfile {
  background-color: #dee4ed;
  height: 276px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;
  text-align: center;
  border: 1px dashed #a1a1a1;
}

.edit__addfile-text {
  color: rgba(65, 76, 99, 0.5);
  width: 40%;
  line-height: 34px;
  margin-bottom: 20px;
}

.edit__description {
  width: 48%;
}

.edit__textarea {
  width: 100%;
  min-height: 147px;
  padding: 13px 20px;
  line-height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.field__title {
  color: rgba(65, 76, 99, 0.5);
  font-weight: 600;
}

.field--edit::placeholder {
  font-weight: bold;
}

.edit__tags {
  margin-bottom: 40px;
}

.edit__tag {
  position: relative;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 15px 10px 20px;
  background-color: #f4f4f4;
  border-radius: 25px;
  margin-right: 10px;
}

.edit__tag-text {
  margin-right: 10px;
}

.edit__tag-cancel {
  transform: translate(50%, 50%) rotate(45);
  background: svg-load('remove.svg', fill=$gray, width=100%, height=100%)
    no-repeat;
  width: 12px;
  height: 12px;
}

.edit__btns {
  display: flex;
  justify-content: flex-end;
}

.edit__btns-cancel {
  margin-right: 55px;
  color: #383bcf;
  font-weight: 600;
}

.admin__works {
  display: inline-flex;
  flex-wrap: wrap;
}

.admin__works-widget {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #006aed, #3f35cb);
  margin-bottom: 30px;
  margin-right: 2%;
  width: 32%;
}
.admin__works-widget:nth-child(3) {
  margin-right: 0;
}

.admin__works-widget-text {
  color: $white;
  width: 40%;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
}

.admin__works-widget--works {
  min-height: 560px;
}

.admin__works-widget--addphoto {
  min-height: 380px;
}

.widget {
  display: flex;
  justify-content: flex-start;
  background: $white;
  box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.1);
  padding-bottom: 30px;
}

.widget__img {
  width: 100%;
  position: relative;
  margin-bottom: 40px;
}
.widget__content {
  width: 80%;
}

.widget__skills {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.widget__skills .edit__tag {
  padding: 11px 18px;
  font-size: 13px;
  color: $gray;
}

.widget__title {
  font-size: 18px;
  color: #414c63;
  font-weight: 700;
  margin-bottom: 28px;
}

.widget__text {
  color: rgba(65, 76, 99, 0.7);
  font-weight: 600;
  margin-bottom: 25px;
}

.widget__link {
  display: block;
  color: #383bcf;
  font-weight: 600;
  margin-bottom: 40px;
}

.widget__btns {
  display: flex;
  justify-content: space-between;
}

.widget__btns-link {
  color: rgba(65, 76, 99, 0.5);
  font-weight: 600;
  padding-right: 30px;
  position: relative;
}

.widget__btns-link::after {
  position: absolute;
  right: 0;
  width: 15px;
  height: 15px;
  content: '';
}
.widget__btns-link-edit::after {
  background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);
}

.widget__btns-link-cancel::after {
  background: svg-load('remove.svg', fill=#c92e2e, width=100%, height=100%);
}

.edit__addphoto {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}

.edit__addphoto-block {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  border-radius: 50%;
  margin-bottom: 25px;
}

.add__photo-btn {
  color: #383bcf;
  font-weight: 600;
}

.edit__addphoto-block::after {
  content: '';
  width: 90px;
  height: 115px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: svg-load('user.svg', fill=$white, width=100%, height=100%)
    no-repeat center center;
}

.edit__addphoto-description {
  width: 76%;
}
.edit__addphoto-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.widget__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 112px;
  border-bottom: 1px solid $gray;
  margin-bottom: 25px;
}

.widget__header-title {
  font-size: 18px;
  color: #414c63;
  font-weight: 700;
}

.widget__header-img {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}

.widget__header-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.widget__title-job {
  color: #414c63;
  opacity: 0.5;
  font-weight: 600;
}

.auth {
  margin: 0 auto;
  width: 565px;
  min-height: 520px;
  background: $white;
  /* color: #414c63; */
}

.auth__exit {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  padding-right: 26px;
}

.auth__title {
  color: #414c63;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
}

.auth__exit-icon {
  display: flex;
  justify-content: flex-end;
  text-align: right;
  width: 20px;
  height: 20px;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 100%;
    height: 25%;
    background-color: $gray;
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }
}

.auth__inputs {
  width: 80%;
  margin: 0 auto;
}

.auth__inputs-block {
  width: 100%;
}

.auth__inputs-title {
  color: $gray;
  font-weight: 600;
  opacity: 0.3;
  padding-left: 40px;
}

.auth__input {
  width: 100%;
  border: 0;
  border-bottom: 1px solid $gray;
  margin-bottom: 40px;
  height: 60px;
  padding-left: 40px;
  position: relative;
}

.auth__input--login:before {
  content: "alex";
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 60px;
  background: svg-load('user.svg', fill=black, width=100%, height=100%);
}
.auth__input--pass:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 60px;
  background: svg-load('key.svg', fill=black, width=100%, height=100%);
}

.auth__input::placeholder {
  color: $gray;
  opacity: 1;
  font-weight: 600;
}

.auth__send {
  width: 50%;
  height: 80px;
  margin: 0 auto;
}

.auth__send-btn {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,#006aed,#3f35cb);
  font-size: 18px;
  color: $white;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 50px 12px 50px 12px; 					
  -moz-border-radius-topleft: 25px; 					
  -moz-border-radius-topright: 12px; 					
  -moz-border-radius-bottomleft: 12px; 					
  -moz-border-radius-bottomright: 25px;  
}
</style>
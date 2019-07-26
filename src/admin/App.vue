<template lang="pug">
  .admin
    .admin-main
      app-header  
      app-menu
      section.admin__content
        router-view
        
    .admin-main
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
          form.auth  
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
  import appHeader from "./components/header"
  import appMenu from "./components/menu"
// var ajaxForm = function(form) {
//   let formData = new FormData()
//   formData.append('name', form.elements.name.value)
//   formData.append('password', form.elements.password.value)
//   let url = 'https://webdev-api.loftschool.com/sendmail'
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'
//   xhr.open('POST', url)
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
//   xhr.send(formData)

//   return xhr
// }
// var submitForm = function(e) {
//   e.preventDefault()
//   var form = e.target
//   let request = ajaxForm(form)
//   request.addEventListener('load', () => {
//     if (request.status >= 400) {
//       let content = 'Ошибка соединения с сервером, попробуйте позже'
//       overlay.open('.modal__open', `${content}. Ошибка ${request.status}`)
//     } else {
//       let content = request.response.message
//       overlay.open('.modal__open', content)
//     }
//   })
// }

// let myForm = document.querySelector('auth')
// myForm.addEventListener('submit', submitForm)
export default {
  components: {
    appHeader, appMenu
  } 
}
</script>

<style lang="pcss">
@import url('../styles/mixins');
@import url('../styles/main');
@import url('../styles/layout/base');





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
  display: block;
  width: 100%;
  border: 0;
  border-bottom: 1px solid $gray;
  margin-bottom: 40px;
  height: 60px;
  padding-left: 40px;
  position: relative;
}

.auth__input--login:before {
  content: 'alex';
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 60px;
  background: svg-load('user.svg', fill=black, width=100%, height=100%);
}
.auth__input--pass:before {
  content: '';
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
  transition: opacity 0.5s ease;
}

.auth__input:focus::placeholder {
  opacity: 0;
  transition: opacity 0.5s ease;
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
  background: linear-gradient(90deg, #006aed, #3f35cb);
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
<template lang="pug">
  .admin
    .admin-main
      app-header  
      app-menu
      section.admin__content
        router-view
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

</style>
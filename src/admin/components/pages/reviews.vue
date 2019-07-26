<template lang="pug">
  .admin__container
            .admin__content-header
              h1.admin__content-title Блок "Отзывы" 
            .admin__works
              .admin__works-widget.admin__works-widget--addphoto
                button.add.add--widget + 
                p.admin__works-widget-text Добавить отзыв
              .admin__works-widget.widget 
                .widget__content    
                  .widget__header
                    .widget__header-img
                      //- img(src="../images/content/sabantsev.jpg").widget__header-pic
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
                      //- img(src="../images/content/sabantsev.jpg").widget__header-pic
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
                      //- img(src="../images/content/sabantsev.jpg").widget__header-pic
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
                      //- img(src="../images/content/sabantsev.jpg").widget__header-pic
                    .widget__header--title
                      .widget__header-title Владимир Сабанцев 
                      .widget__title-job Преподаватель
                  .widget__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.widget__link http://loftschool.com
                  .widget__btns
                    button.widget__btns-link.widget__btns-link-edit Править
                    button.widget__btns-link.widget__btns-link-cancel Удалить
</template>
<style lang="postcss">
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
</style>

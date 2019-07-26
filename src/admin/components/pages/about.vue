<template lang="pug">
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

<style lang="postcss">
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
</style>

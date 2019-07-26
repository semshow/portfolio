<template lang="pug">
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
<style lang="postcss">
.auth {
  margin: 0 auto;
  width: 565px;
  min-height: 520px;
  background: $white;
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

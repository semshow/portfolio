let options = {
  buttonOpen: '.hamburger__button',
  buttonClose: '.hamburger__close',
  background: '.hamburger__modal',
  menu: '.hamburger',
  socialLinks: 'social__list'
}

let menu = (function(options) {
  let button = document.querySelector(options.buttonOpen)
  let modalMenu = document.querySelector(options.menu)
  let closeButton = document.querySelector(options.buttonClose)
  let body = document.querySelector('body')
  let bg = document.querySelector(options.background)
  let links = document.getElementById(options.socialLinks).children
  console.log(links)

  let _openMenu = function(e) {
    bg.style.display = 'block'
    modalMenu.style.transform = 'translateX(0)'
    body.classList.add('body--active-modal')
  }

  let _closeMenu = function(e) {
    bg.style.display = 'none'
    modalMenu.style.transform = 'translateX(100%)'
    body.classList.remove('body--active-modal')
  }

  let addListeners = function() {
    button.addEventListener('click', _openMenu)
    closeButton.addEventListener('click', _closeMenu)
    modalMenu.addEventListener('click', function(e) {
      target = e.target

      if (
        target.className == 'main-menu__link' ||
        target.parentElement.className == 'socials__link'
      ) {
        _closeMenu()
      }
    })
  }

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) {
      _closeMenu()
    }
  })

  return {
    toggleMenu: addListeners
  }
})(options)

menu.toggleMenu()

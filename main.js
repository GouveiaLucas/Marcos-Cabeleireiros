// characters = string 'um texto qualquer

//number 12345

// true or false = boolean

// DOM - document object model

/*abre e fecha o menu quando clicar no ícone hamburguer e x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu, esconder todo o menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/****** SCROLL REAVEAL ******/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text,
#home .image
#about .image,
#about .text,
#services header, #services .card,
#testimonials header,
#testimonials .testimonials
#contact .text,
#contact .links,
footer .brand, footer .social`,
  { interval: 100 }
)

// BACK TO TOP
const backTop = document.querySelector('.back-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 500) {
    backTop.classList.add('show')
  } else {
    backTop.classList.remove('show')
  }
})

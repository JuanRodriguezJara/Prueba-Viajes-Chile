// Función que al bajar la pantalla, el navbar queda fijo con fondo negro
var nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow')
  }
})
const navBg  = document.getElementById('nav-bg');
const nav    = document.getElementsByTagName('NAV');
const header = document.getElementsByTagName('HEADER')[0];
var i;

function openMenu() {
  navBg.classList.add('nav-open');
  for (i = 0; i < nav.length; i++) {
    nav[i].classList.add('nav-open');
  }
}

function closeMenu() {
  for (i = 0; i < nav.length; i++) {
    nav[i].classList.remove('nav-open');
  }
  navBg.classList.remove('nav-open');
}
navBg.addEventListener('click', closeMenu);

let shadow = false;
function handleScroll() {
  if(shadow) {
    if(window.scrollY < 5) {
      shadow = false;
      header.classList.remove('header-shadow')
    }
  } else {
    if(window.scrollY > 0) {
      shadow = true;
      header.classList.add('header-shadow')
    }
  }
}
document.addEventListener('scroll', handleScroll);

document.addEventListener("DOMContentLoaded", () => {
  Hammer(document.getElementById('nav-swipe')).on('swiperight', function() {
    openMenu();
  });
})
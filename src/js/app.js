document.addEventListener('DOMContentLoaded', () => {
  eventListeners();
  darkMode();
});

function darkMode() {
  const buttonDarkMode = document.querySelector('.dark-mode-button');
  buttonDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

function eventListeners() {
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenu.addEventListener('click', navigationResponsive);
}

function navigationResponsive() {
  // if(navigation.classList.contains('show')) {
  //   navigation.classList.remove('show');
  // } else {
  //   navigation.classList.add('show');
  // }

  const navigation = document.querySelector('.navigation');

  navigation.classList.toggle('show');
}
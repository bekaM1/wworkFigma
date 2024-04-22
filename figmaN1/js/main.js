// function toggleMenu() {
//     var hamburger = document.querySelector('.hamburger');
//     hamburger.classList.toggle('active');
// }

function toggleBtn(){
    document.querySelector('.navbar-nav').classList.toggle('active')
}
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

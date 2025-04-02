

// scroll scetion active link
let scetion = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  scetion.forEach(sec => {
    let top = window.scroll.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAtrribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove ('active');
        document.querySelector('header nav a[href*='= id +']').classList.add('active');
      });
    };

  });
  
  
};
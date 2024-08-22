document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navSection = document.querySelector('.nav_section');
  
    menuToggle.addEventListener('click', function() {
      navSection.classList.toggle('active');
      console.log("hello")  ;
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type       : 'loop',
        perPage    : 1,
        autoplay   : true,
        pagination : true,
        arrows : false,
    }).mount();
});
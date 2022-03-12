document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-principal');

   window.addEventListener('resize', function(){
        console.log("creciendo");
        menu.classList.remove('menu-mostrar');
   })
    hamburger.addEventListener('click', function(){
        this.classList.toggle('is-active');
        menu.classList.toggle('menu-mostrar');
    });
   
    //typeIt
    new TypeIt("#txtIntro", {
        strings: "Desarrollador Web!",
      }).go();
});


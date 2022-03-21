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
   scrollNav();
    //typeIt
    new TypeIt("#txtIntro", {
        strings: "Desarrollador Web y UX Designer",
      }).go();


      function scrollNav(){
        const enlaces = document.querySelectorAll('.nav-principal a');
        enlaces.forEach(enlace=>{
            enlace.addEventListener('click', function(e)
            {   
                e.preventDefault();
                const seccionScroll = e.target.attributes.href.value;
                const seccion = document.querySelector(seccionScroll);
                seccion.scrollIntoView({behavior: "smooth"});
            });
        });
    }
});


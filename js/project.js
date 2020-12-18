function topFunction() {
    document.documentElement.scrollTop = 0;
  }
  
var typed = new Typed(".typing", {
        strings: ["Web Developer!", "Full Stack Developer!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });

  function resume(){
    window.open('https://resume.io/r/Xt6SiXeyH');
  };

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

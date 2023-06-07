document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
 
  scrollNav();
  taxi();
  texto();
}

function texto() {
  var texts = ["HACKATHON", "TAXIS LIBRES", "INSCRIBETE"];
  var currentIndex = 0;
  var delay = 200;
  var element = document.getElementById("typing-animation");

  setInterval(function () {
    element.classList.toggle("typing-border");
  }, 500);

  function typeEffect(element, text, delay) {
    var i = 0;
    var interval = setInterval(function () {
      if (Math.random() < 0.1) {
        clearInterval(interval);
        setTimeout(function () {
          interval = setInterval(function () {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
              clearInterval(interval);
              setTimeout(function () {
                element.textContent = ""; 
                currentIndex = (currentIndex + 1) % texts.length; 
                typeEffect(element, texts[currentIndex], delay);
              }, 1000);
            }
          }, delay);
        }, 1000); 
      } else {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(function () {
            element.textContent = "";
            currentIndex = (currentIndex + 1) % texts.length;
            typeEffect(element, texts[currentIndex], delay);
          }, 1000);
        }
      }
    }, delay);
  }

  var heading = document.getElementById("typing-animation");
  typeEffect(heading, texts[currentIndex], delay);
}



function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion-principal a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function taxi() {
  document
    .querySelector(".boton-enviar")
    .addEventListener("click", function (event) {
      event.preventDefault();
      console.log("Imagen aparece");
    });

  var boton = document.querySelector(".boton-enviar");
  var img = document.querySelector(".moving-image");

  boton.addEventListener("click", function () {
    img.classList.add("clicked");
  });
}

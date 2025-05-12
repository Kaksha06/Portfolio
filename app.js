var typed = new Typed('#element', {
          strings: ['<i>Web</i> Developer.', 'Software Engineer.',],
          typeSpeed: 50,
        });

document.querySelector(".btn1").addEventListener("click", function() {
  window.open("./Kaksha.pdf", "_blank"); // Opens in new tab
});

document.querySelector(".btn2").addEventListener("click", function() {
  window.location.href = "https://github.com/Kaksha06";
});
document.querySelector(".btn3").addEventListener("click", function() {
  window.location.href = "https://www.linkedin.com/in/kaksha-kalavadia-2b3534286";
});


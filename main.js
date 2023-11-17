let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #173b8e;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #2e9517;">Soy estudiante de Ingenieria Biomedica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #FFFFFF;">Supervisora de centros educativos, creadora de contenido de entretenimiento y aprendiz de Desarrollo web en Tecnolochicas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

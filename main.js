let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Me dedico al desarrollo y diseño de sitios web, soporte técnico, administración de sistemas operativos')
  .pauseFor(200)
  .deleteChars(10)
  .start();

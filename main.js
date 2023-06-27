let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#634ef7;">Desarrollo sitios web y aprendiendo cada día de la tecnologia.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

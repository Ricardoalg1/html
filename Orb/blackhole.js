var canvas, ctx;
var count = 0;
var star = { x: 300, y: 300, radius: 50, angle: 0 };
var particles = [];

window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 800;

  animate();
};

function animate() {
  // Dibujar el fondo negro (agujero negro)
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Dibujar el agujero negro
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
  ctx.fill();

  // Dibujar la estrella
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
  ctx.fill();

  // Mover la estrella hacia el agujero negro
  var dx = (canvas.width / 2 - star.x) * 0.01;
  var dy = (canvas.height / 2 - star.y) * 0.01;
  star.x += dx;
  star.y += dy;

  // Espaguetización: estirar la estrella y reducir su radio
  if (Math.abs(star.x - canvas.width / 2) < 100) {
    star.radius *= 0.99;
    star.y += 5 * Math.sin(star.angle);
    star.angle += 0.1;
  }

  count++;
  requestAnimationFrame(animate);
}

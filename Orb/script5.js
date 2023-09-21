var canvas, ctx;
var points = [];
var angle = 0;

window.onload = function () {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;

  // Generar puntos en 3D para la órbita
  for (var t = 0; t <= Math.PI*2 ; t += 0.1) {
    var x = 50 * Math.cos(t);
    var y = 50 * Math.sin(t);
    var z = 0;
    points.push([x, y, z]);
  }

  // Iniciar la animación
  animate();
};

function animate() {
  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar la órbita rotando sobre su eje
  ctx.strokeStyle = "green";
  ctx.lineWidth = 1;

  ctx.beginPath();
  for (var i = 0; i < points.length; i++) {
    var x = points[i][0];
    var y = points[i][1] * Math.cos(angle) - points[i][2] * Math.sin(angle);
    var z = points[i][1] * Math.sin(angle) + points[i][2] * Math.cos(angle);

    var scale = 200 / (z + 200);
    var x2D = x * scale + 200;
    var y2D = y * scale + 200;

    if (i === 0) {
      ctx.moveTo(x2D, y2D);
    } else {
      ctx.lineTo(x2D, y2D);
    }
  }
  ctx.closePath();
  ctx.stroke();

  // Actualizar el ángulo para la próxima iteración
  angle += 0.02;

  // Solicitar el próximo cuadro de la animación
  requestAnimationFrame(animate);
}

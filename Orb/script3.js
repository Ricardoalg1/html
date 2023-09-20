var canvas, ctx;
var points = [];

window.onload = function () {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;
  ctx.fillRect(0, 0, 400, 400);

  // Generar puntos en 3D
  for (var x = -50; x <= 50; x += 20) {
    for (var y = -50; y <= 50; y += 20) {
      for (var z = -50; z <= 50; z += 20) {
        points.push([x, y, z]);
      }
    }
  }

  // Dibujar puntos en 2D
  for (var i = 0; i < points.length; i++) {
    var x = points[i][0];
    var y = points[i][1];
    var z = points[i][2];

    // Proyección simple para convertir 3D a 2D
    var scale = 100 / (z + 100);
    var x2D = x * scale + 200;
    var y2D = y * scale + 200;

    ctx.fillStyle = "red";
    ctx.fillRect(x2D, y2D, 5, 5);
  }
};

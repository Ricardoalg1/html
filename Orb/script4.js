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

  // Dibujar líneas en 2D
  ctx.strokeStyle = "red"; // Color de la línea
  ctx.lineWidth = 1; // Ancho de la línea

  for (var i = 0; i < points.length - 1; i++) {
    var x1 = points[i][0];
    var y1 = points[i][1];
    var z1 = points[i][2];

    var x2 = points[i + 1][0];
    var y2 = points[i + 1][1];
    var z2 = points[i + 1][2];

    // Proyección simple para convertir 3D a 2D
    var scale1 = 200 / (z1 + 200);
    var x1_2D = x1 * scale1 + 200;
    var y1_2D = y1 * scale1 + 200;

    var scale2 = 200 / (z2 + 200);
    var x2_2D = x2 * scale2 + 200;
    var y2_2D = y2 * scale2 + 200;

    // Dibujar la línea
    ctx.beginPath();
    ctx.moveTo(x1_2D, y1_2D);
    ctx.lineTo(x2_2D, y2_2D);
    ctx.stroke();
  }
};

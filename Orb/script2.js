var canvas, ctx;
var points = [];

window.onload = function () {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var r = 0;
  var MAX = 50;
  for (var a = 0; a < MAX; a++) {
    points.push([Math.cos(r), Math.sin(r)]);
    r += (Math.PI * 2) / MAX;
  }

  drawOrbits();
};

function drawOrbits() {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;

  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var maxRadius = Math.min(centerX, centerY) - 10; // 10 píxeles de margen

  // Dibuja 3 órbitas de diferentes tamaños
  for (var s = 1; s <= 3; s++) {
    var radius = (maxRadius / 4) * s; // Ajusta el radio para que las órbitas no excedan el tamaño del canvas
    for (var a = 0; a < points.length; a++) {
      const b = points[a];
      const c = points[(a + 1) % points.length];
      ctx.beginPath();
      ctx.moveTo(b[0] * radius + centerX, b[1] * radius + centerY);
      ctx.lineTo(c[0] * radius + centerX, c[1] * radius + centerY);
      ctx.stroke();
    }
  }
}

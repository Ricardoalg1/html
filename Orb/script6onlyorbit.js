var canvas, ctx;
var count = 0;
var points = [];
var MAX = 50;
var MAX_FRAMES = 1000;

window.onload = function () {
  canvas = document.getElementById("one");
  ctx = canvas.getContext("2d");
  canvas.width = canvas.height = 400;
  ctx.fillStyle = "rgba(255,255,255,0)";
  ctx.fillRect(0, 0, 200, 200);

  var r = 0;

  for (var a = 0; a < MAX; a++) {
    points.push([-Math.cos(r), -Math.sin(r), 0]);
    r += (Math.PI * 2) / MAX;
    console.log("for1 :>> ", points);
  }

  for (var a = 0; a < MAX; a++) {
    points.push(0, points[a][0], -points[a][1]);
    console.log("for2 :>> ", points);
  }

  for (var a = 0; a < MAX; a++) {
    points.push(points[a][1], 0, points[a][0]);
    console.log("for3 :>> ", points);
  }

  animate();
  console.log("points :>> ", points);
};

function animate() {
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(0,0,0,0.03)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "lighter";

  var tim = count / 3;

  for (var e = 0; e < 20; e++) {
    tim *= 1.2;
    var s = 1 - e / 20;
    var a = tim / 59;
    var yp = Math.cos(a);
    var yp2 = Math.sin(a);
    a = tim / 23;
    var xp = Math.cos(a);
    var xp2 = Math.sin(a);
    var p2 = [];

    for (var a = 0; a < points.length; a++) {
      var x = points[a][0];
      var y = points[a][1];
      var z = points[a][2];

      var y1 = y * yp + z * yp2;
      var z1 = y * yp2 - z * yp;
      var x1 = x * xp + z1 * xp2;

      z = x * xp2 - z1 * xp;
      z1 = Math.pow(2, z * s);
      x = x1 * z1;
      y = y1 * z1;
      p2.push([x, y, z]);
    }

    // console.log("p2 :>> ", p2);

    s *= 120;
    for (var d = 0; d < 3; d++) {
      for (var a = 0; a < MAX; a++) {
        const b = p2[d * MAX + a];
        // console.log("b :>> ", b);
        const c = p2[((a + 1) % MAX) + d * MAX];
        // console.log("c :>> ", c);
        ctx.beginPath();
        ctx.strokeStyle = "hsla(" + (((a / MAX) * 360) | 0) + ",80%,60%,0.2)";

        // console.log("color:>> ", `${(a / points.length) * 360}`);
        ctx.lineWidth = Math.pow(6, b[2]);
        ctx.lineTo(b[0] * s + 200, b[1] * s + 200);
        ctx.lineTo(c[0] * s + 200, c[1] * s + 200);
        ctx.stroke();
      }
    }
  }

  if (count >= MAX_FRAMES) {
    count = 0;
  }

  // console.log("count++ :>> ", count++);
  count++;
  requestAnimationFrame(animate);
}

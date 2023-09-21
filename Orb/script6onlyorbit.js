var canvas, ctx;
var count = 0;
var points = [];

window.onload = function () {
  canvas = document.getElementById("two");
  ctx = canvas.getContext("2d");
  canvas.width = canvas.height = 400;
  ctx.fillStyle = "rgba(255,255,255,0)";
  ctx.fillRect(0, 0, 200, 200);

  var r = 0;
  var MAX = 50;
  for (var a = 0; a < MAX; a++) {
    points.push([Math.cos(r), Math.sin(r), 0]);
    r += (Math.PI * 2) / MAX;
  }

  animate();
  console.log("points :>> ", points);
};

function animate() {
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(0,0,0,0.03)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "";

  var tim = count / 3;
  var s = 1;
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

  console.log("p2 :>> ", p2);

  s *= 50;
  for (var a = 0; a < points.length; a++) {
    const b = p2[a];
    console.log("b :>> ", b);
    const c = p2[(a + 1) % points.length];
    console.log("c :>> ", c);
    ctx.beginPath();
    ctx.strokeStyle =
      "hsla(" + (((a / points.length) * 360) | 0) + ",70%,60%,0.15)";

    console.log("color:>> ", `${(a / points.length) * 360}`);
    ctx.lineWidth = Math.pow(6, b[2]);
    ctx.lineTo(b[0] * s + 200, b[1] * s + 200);
    ctx.lineTo(c[0] * s + 200, c[1] * s + 200);
    ctx.stroke();
  }
  console.log("count++ :>> ", count++);
  count++;
  requestAnimationFrame(animate);
}

var Circle = function(x, y, radius, color) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2*Math.PI, false);
	ctx.fillStyle=color;
	ctx.fill();
}
var newCircle = Circle(100, 100, 100, "#70ffca");
var fireworks = [];
var gravity;
var w_screen = 1520;
var h_screen = 690;

function setup() {
    createCanvas(w_screen, h_screen);
    colorMode(HSB);
    gravity = createVector(0, 0.2);
    strokeWeight(6);
    background(0);
}

function draw() {
    colorMode(RGB);
    background(0, 0, 0, 25);

    if (random(1, 100) < 3) {
        var firework = new HeartFirework();
        fireworks.push(firework);
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();

        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}
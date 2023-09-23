function HeartFirework() {
  this.hu = random(255)
  this.firework = new Particle(random(width), random(350, 700), this.hu, true);
  this.exploded = false;
  this.particles = [];

  this.done = function () {
      if (this.exploded && this.particles.length === 0) {
          return true;
      } else {
          return false;
      }
  };

  this.update = function () {
      if (!this.exploded) {
          this.firework.applyForce(gravity);
          this.firework.update();

          if (this.firework.vel.y >= 0) {
              this.exploded = true;
              this.explode();
          }
      }

      for (var i = this.particles.length - 1; i >= 0; i--) {
          this.particles[i].applyForce(gravity);
          this.particles[i].update();

          if (this.particles[i].done()) {
              this.particles.splice(i, 1);
          }
      }
  };

  this.explode = function () {
      var centerX = this.firework.pos.x;
      var centerY = this.firework.pos.y - 50;
      var heartSize = 10;
      var t = 0;

      for (var i = 0; i < 360; i += 1) {
          var angle = radians(i);
          var x = centerX + heartSize * 16 * pow(sin(angle), 3);
          var y = centerY - heartSize * (13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle));
          var p = new Particle(x, y, this.hu, false);
          this.particles.push(p);
      }
  };

  this.show = function () {
      if (!this.exploded) {
          this.firework.show();
      }

      for (var i = 0; i < this.particles.length; i++) {
          this.particles[i].show();
      }
  };
}
define(function() {
  'use strict';

  function Entity(x, y, xv, yv) {
    // Set x and y coordinates
    this.x = x;
    this.y = y;

    // Create initial velocity values
    this.vel = { x: 0, y: 0};

    // Set velocity values based on optional arguments
    if (xv) this.vel.x = xv;
    if (yv) this.vel.y = yv;
  }

  // Width and height of entity's hitbox
  Entity.prototype.width = 0;
  Entity.prototype.height = 0;

  // Friction value used in determining velocity
  // TODO: allow setting this individually for x and y
  Entity.prototype.friction = 0.9;

  // Speed value sometimes used in the determining velocity
  //
  // This value should be a number that the velocity would increase by each
  // frame when accelerating.
  Entity.prototype.speed = 0;

  Entity.prototype.update = function() {
    // Update x and y values based on velocity
    this.x += this.vel.x;
    this.y += this.vel.y;

    // Update velocities based on friction
    this.vel.x *= this.friction;
    this.vel.y *= this.friction;
  };

  Entity.prototype.render = function(game) {
    // Draw rectangle onto canvas context
    game.context.fillRect(Math.round(this.x),
                          Math.round(this.y),
                          this.width,
                          this.height);
  };

  return Entity;
});

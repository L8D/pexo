define([
  'bound-entity',
  'keydown'
], function(BoundEntity, keydown) {
  'use strict';

  // Set parent psuedo-class
  //
  // This is just here in case we restructure something and want to change the
  // parent without potentially breaking code.
  var parent = BoundEntity;

  function Player() {
    // Call super method (the original parent constructor)
    parent.apply(this, arguments);
  }

  // Set prototype to inherit from parent
  Player.prototype = Object.create(parent.prototype);

  // Width and height values
  Player.prototype.width = 3;
  Player.prototype.height = 3;

  // Speed value
  Player.prototype.speed = 1;

  Player.prototype.update = function(game) {
    // Call super method (the original method on the parent prototype)
    parent.prototype.update.call(this, game);

    // Update velocities based on keyboard input
    if (keydown[68]) { // key 'd'
      this.vel.x += this.speed;
    }

    if (keydown[65]) { // key 'a'
      this.vel.x -= this.speed;
    }

    if (keydown[87]) { // key 'w'
      this.vel.y -= this.speed;
    }

    if (keydown[83]) { // key 's'
      this.vel.y += this.speed;
    }
  };

  return Player;
});

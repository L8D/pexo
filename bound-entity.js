define(['entity'], function(Entity) {
  'use strict';

  // Set parent psuedo-class
  var parent = Entity;

  function BoundEntity() {
    parent.apply(this, arguments);
  }

  // Set prototype to inherit from parent
  BoundEntity.prototype = Object.create(parent.prototype);

  BoundEntity.prototype.update = function(game) {
    // Call super method
    parent.prototype.update.call(this, game);

    // Bind object to walls by setting its velocity to 0 and it's coordinates
    // them
    //
    // TODO: Make this support collision because we're going to do that
    if (this.x < 0) {
      this.vel.x = 0;
      this.x = 0;
    } else if (this.x > game.width - this.width) {
      this.vel.x = 0;
      this.x = game.width - this.width;
    }

    if (this.y < 0) {
      this.vel.y = 0;
      this.y = 0;
    } else if (this.y > game.height - this.height) {
      this.vel.y = 0;
      this.y = game.height - this.height;
    }
  };

  return BoundEntity;
});

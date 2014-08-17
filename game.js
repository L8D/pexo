define([
  'player'
], function(Player) {
  'use strict';

  function Game(parent, width, height) {
    // Sort out optional arguments
    if (width === undefined) width = 600;
    if (height === undefined) height = 400;

    // Create canvas element and define width and height
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = height;

    // Create 2D canvas context
    this.context = this.canvas.getContext('2d');

    // Attatch canvas element to parent element
    parent.appendChild(this.canvas);

    // Create initial entity and particle arrays
    this.entities = [new Player(100, 100)];
    this.particles = [];

    // Start internal game loop
    requestAnimationFrame(this.step.bind(this));
  }

  Game.prototype.step = function() {
    // Update state to the next frame
    this.update();

    // Render all entities to the canvas
    this.render();

    // Schedule next step for the next animation frame.
    // This gets called roughly 60 times a second in modern browsers
    requestAnimationFrame(this.step.bind(this));
  };

  Game.prototype.update = function() {
    // Loop through each entity and call their update method
    for (var i = 0; i < this.entities.length; i++) {
      this.entities[i].update(this);

      // If the dead flag is set to true then we splice it from the array and
      // set back our current counter
      if (this.entities[i].dead) {
        this.entities.splice(i, 1);
        i--;
      }
    }
  };

  Game.prototype.render = function() {
    // Clear the screen
    this.context.clearRect(0, 0, this.width, this.height);

    // Loop through each entity and call their render method
    for (var i = 0; i < this.entities.length; i++) {
      this.entities[i].render(this);
    }
  };

  return Game;
});

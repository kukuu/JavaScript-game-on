# Overview
This task is a classic HTML5 Snake game in ES6 JavaScript and Pixi.js.

The classic Snake game gives the player the ability to control a snake around the screen with the right, left, up and down arrows, eating food and avoiding hitting the walls or the snakes body. The snake grows after each piece of eaten food, the longer you play the harder the game becomes as the ever growing snake body becomes hard to maneuver around!

This repository is configured with Webpack for builds, code is transpiled through Babel, a test framework is set up with Jest and the application renders a moving 10x10px block along the screen.

### Rules:
* Left, Right, Up and Down controls move the snake
* Game is lost when the snake collides with any sides of the screen 
* Game is lost when the snake collides with its own body
* When a piece of food is consumed by the snake, another one must randomly appear somewhere on the screen
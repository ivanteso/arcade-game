# Memory Game, a Udacity's project (WORK IN PROGRESS)

This project is part of the __Frontend Web Developer Nanodegree (full Google scholarship)__. This project's purose is to practice JavaScript's object-oriented programming

## Table of Contents

* [Instructions](#instructions)
* [Play](#play)
* [Functionality](#play)
* [Requirements](#functionality)
* [Dependencies](#dependencies)
* [Contributing](#contributing)
* [TODO](#TODO)

## Instructions

A starter code containing the main game's engine and resource loader has been provided. The goal was to develope all the objects and the functions to render all the characters and the texture, control them and define the game's rules. The game is pretty easy: you have to reach the top side of the canvas (water) with the player, avoiding the bugs coming from the left side of the screen. The player has 3 attempt (lives) to eventually
win the game.

## Play

If you'd like to play a full version of the game, just click [here!](https://ivanteso.github.io/arcade-game/) and enjoy.

## Functionality

I've used ES2016's classes to define enemies and player. Both the classes have their one properties and functionalities:

- __Enemies' "y" and "speed" definers__: these functionalities are made to randomly select the new y position and speed of the enemies every time they exit from the screen
- __Enemies' collision handler__: to define when the enemy hit the player
- __Player's lives__: every time the player crash into a bug, one life and one heart on top of the screen are removed. Player has 3 lives in total.
- __Input handler__: define how the player moves into the canvas pressing arrow keys

## Requirements

The game has to follow some code criteria in order to satisfy the project specifications. The full detailed list of the requirements is available to consult at the [Project Rubric Link](https://review.udacity.com/#!/rubrics/15/view).

## Dependencies

The project is created starting from the original [Udacity's Project](https://github.com/udacity/frontend-nanodegree-arcade-game).

I've used the following resources in order to complete the project:

__Javascript:__
- [VanillaJS](http://vanilla-js.com/)

## Contributing

All suggestions and tips will be more than appreciated but, as general rule, no pull requested are normally accepted.

## TODO

This project is still pretty raw and I would like to add some extra functionalities to make it a little bit more interesting, like:

- __Select the player image__
- __Add collectable to earn points__
- __Add a score system__
- __Add a timer__
- __Add some other random enemies__
- __Enlarge the canvas__
- __Add style to the whole page__

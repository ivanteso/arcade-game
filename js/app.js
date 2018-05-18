// Enemies our player must avoid
class Enemy {
    constructor(){
      // Variables applied to each of our instances go here,
      // we've provided one for you to get started

      // The image/sprite for our enemies, this uses
      // a helper we've provided to easily load images
      this.sprite = 'images/enemy-bug.png';
      this.x = -200;
      this.y = this.yDefiner();
      this.speed = this.speedDefiner();
    }

    yDefiner() {
      let random_position = Math.random();
      let position;
        if (random_position < 0.33) {
          position = 60;
        } else if (random_position > 0.66) {
          position = 230;
        } else {
          position = 145;
        }
      return position;
    }

    speedDefiner() {
      let random_speed = Math.random();
      let speed_value;
      if (random_speed < 0.33) {
        speed_value = 200;
      } else if (random_speed > 0.66) {
        speed_value = 400;
      } else {
        speed_value = 300;
      }
      return speed_value;
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += (dt * this.speed);
        if (this.x > 505) {
          this.x = -200;
          this.y = this.yDefiner();
          this.speed = this.speedDefiner();
        }


    };

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};





// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 395;
  }

  update() {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > 404) {
        this.x = 404;
    } else if (this.y < -20){
        this.y = -20;
    } else if (this.y > 395) {
      this.y = 395;
    }
  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(key){
    switch(key) {
      case 'up':
        this.y -= 83;
        break;
      case 'down':
        this.y += 83;
        break;
      case 'left':
        this.x -= 101;
        break;
      case 'right':
        this.x += 101;
        break;
    }
  }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [];

let enemy0 = new Enemy();
let enemy1 = new Enemy();
let enemy2 = new Enemy();
let enemy3 = new Enemy();
let enemy4 = new Enemy();

allEnemies.push(enemy0, enemy1, enemy2, enemy3, enemy4);

let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

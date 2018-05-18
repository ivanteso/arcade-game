// Enemies our player must avoid
class Enemy {
    constructor(){
      this.sprite = 'images/enemy-bug.png';
      this.x = -200;
      this.y = this.yDefiner(); // Define a y random position at start
      this.speed = this.speedDefiner(); // Define a random speed at start
    }

    // Randomly define enemy's y position
    yDefiner() {
      let random_position = Math.random();
      let position;
        if (random_position < 0.33) {
          position = 63;
        } else if (random_position > 0.66) {
          position = 229;
        } else {
          position = 146;
        }
      return position;
    }

    // Randomly define enemy's speed
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

    // Update the enemy's position
    update(dt) {
        this.x += (dt * this.speed);
        if (this.x > 505) {
          this.x = -200;
          this.y = this.yDefiner();
          this.speed = this.speedDefiner();
        }
    };

    /* check the enemy's position and if its x range and y is equal
    ** to player's value, set player position at starting point
    */
    handleCollision() {
      if (this.x + 101 > player.x && this.x < player.x + 101 && this.y === player.y) {
        player.x = 202;
        player.y = 395;
        console.log('beccato');
      }
    };

    // Draw the enemy on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};

// Player class
class Player {
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.x = 202; // Canvas' center
    this.y = 395; // Canvas' bottom
  }

  // Set the canvas limits for the player
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

  // Set how every key input affect player's position on canvas
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

// Build 4 enemies from Enemy class
let enemy0 = new Enemy();
let enemy1 = new Enemy();
let enemy2 = new Enemy();
let enemy3 = new Enemy();

// Place all enemy objects in an array called allEnemies
let allEnemies = [];
allEnemies.push(enemy0, enemy1, enemy2, enemy3);

// Place the player object in a variable called player
let player = new Player();

/* This listens for key presses and sends the keys to
** Player.handleInput() method
*/
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

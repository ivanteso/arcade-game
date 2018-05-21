// Start modal
let modal_begin = document.getElementsByClassName('modal_begin')[0];
let start_button = document.getElementById('start_button');
start_button.addEventListener('click', startGame);

// Win modal
let modal_wingame = document.getElementsByClassName('modal_wingame')[0];
let play_again_button = document.getElementById('play_again_button');
play_again_button.addEventListener('click', reload);

// Gameover modal
let modal_gameover = document.getElementsByClassName('modal_gameover')[0];
let gameover_button = document.getElementById('gameover_button');
gameover_button.addEventListener('click', reload);

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
        speed_value = 250;
      } else if (random_speed > 0.66) {
        speed_value = 450;
      } else {
        speed_value = 350;
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
    ** to player's value, set player position at starting point. If the
    ** player get hitten, call checkLives function
    */
    handleCollision() {
      if (this.x + 101 > player.x && this.x < player.x + 101 && this.y === player.y) {
        player.x = 202;
        player.y = 395;
        player.checkLives();
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
    this.x = 202; // In canvas' center
    this.y = 395; // In canvas' bottom
    this.playerlife = 3; // Player's lives
    this.isAlive = true; // Condition to keep page update and rendered
    this.win = false; // Condition to keep page update and rendered
  }

  // Set the canvas limits for the player
  update() {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > 404) {
        this.x = 404;
    } else if (this.y > 395) {
      this.y = 395;
    } else if (this.y <= -20){
        this.y = -20;
        this.win = true; // If player reach the top, set .win as true
        modal_wingame.style.display = 'block'; // Show winning modal
    }
  }

  checkLives() {
    this.playerlife--;

    if (this.playerlife == 2) {
      heart_one.style.visibility = 'hidden'; // One heart less
    } else if (this.playerlife == 1) {
        heart_two.style.visibility = 'hidden'; // One heart less
    } else if (this.playerlife == 0) {
      heart_three.style.visibility = 'hidden'; // One heart less
      this.isAlive = false; // Set variable as false after 3 hits
      modal_gameover.style.display = 'block'; // Show gameover modal
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
** Player.handleInput() method, added only when the start modal
** is closed by the user
*/
function startGame() {
  modal_begin.style.display = 'none'; // Hide the start modal
  document.addEventListener('keyup', function(e) {
      var allowedKeys = {
          37: 'left',
          38: 'up',
          39: 'right',
          40: 'down'
      };

      player.handleInput(allowedKeys[e.keyCode]);
  });
}

// Function called to refresh page when player win or loose by modal buttons
function reload() {
  location.reload();
}

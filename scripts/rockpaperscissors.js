var Display = {
  transitionMenuToGame: function() {
    $( "#" + game.player_character ).effect(
      "pulsate", { times: 1 }, 1500, function() {
        $( "#alert-box" ).fadeTo( 300, 0 );
        $( "#character-choices" ).fadeOut(
          300, function() {
            if( $( window ).width() < 800 ) {
              $( "#alert-box" ).hide();
            } else {
              Display.showKeyboardInstructions();
            }
            $( "main" ).fadeIn( 300 );
          }
        );
      }
    );
  },

  showKeyboardInstructions: function() {
    $( "#alert-box" ).html( "Choose <u>R</u>ock, <u>P</u>aper or <u>S</u>cissors!" );
    $( "#alert-box" ).fadeTo( 300, 100 );
  },

  addComputerCharacter: function() {
    $( "#computer li.character" ).addClass( game.computer_character );
  },

  addPlayerCharacter: function() {
    $( "#player li.character" ).addClass( game.player_character );
  },

  updatePoints: function() {
    $( "#player ul li.wins" ).text( game.wins.player );
    $( "#computer ul li.wins" ).text( game.wins.computer );
  }
};

function Game() {
  this.init();
  this.computer_character = this.randomCharacter();
  this.wins = {
    player: 0,
    computer: 0
  };
}

Game.prototype = {
  keysToHand: {
    114: "rock",
    82: "rock",
    112: "paper",
    80: "paper",
    115: "scissors",
    83: "scissors"
  },

  characters: [
    "dog",
    "tiger",
    "chick",
    "tako",
    "moon",
    "santa",
    "alien",
    "poop",
    "smiley",
    "purple-demon"
  ],

  init: function() {
    this.bindCharacters();
    this.bindKeypress();
    this.bindControls();
  },

  randomCharacter: function() {
    return this.characters[Math.floor( Math.random()*this.characters.length )];
  },

  bindCharacters: function() {
    $( ".character-choice" ).click( function( e ) {
      game.player_character = this.id;
      Display.addPlayerCharacter();
      Display.addComputerCharacter();
      Display.transitionMenuToGame();
    });
  },

  bindKeypress: function() {
    $( document ).on( "keypress", function( e ) {
      if ( Object.keys( game.keysToHand ).indexOf( "" + e.which ) !== -1 ) {
        game.player_hand = game.keysToHand[e.charCode];
        game.play();
      }
    });
  },

  unbindKeypress: function() {
    $( document ).off( "keypress" );
  },

  bindControls: function() {
    $( ".controls li" ).click( function( e ) {
      game.player_hand = this.id;
      game.play();
    });
  },

  play: function() {
    this.unbindKeypress();
    this.resetHandToRock();
    this.chooseComputerHand();
    this.animateHands();
    var that = this;
    setTimeout( function(){
      that.showChoosenHands();
      that.addPoints();
      Display.updatePoints();
      that.bindKeypress();
    }, 1500 );
  },

  chooseComputerHand: function() {
    var hands = ["rock", "paper", "scissors"];
    this.computer_hand = hands[Math.floor(Math.random() * hands.length )];
  },

  animateHands: function() {
    this.bounceHands();
    this.bounceHands();
    this.bounceHands();
  },

  bounceHands: function() {
    $( ".hands" ).effect( "bounce", {
      distance: 30,
      times: 1,
    }, 500 );
  },

  showChoosenHands: function() {
    $( "#player-hand" ).removeClass( "rock" );
    $( "#computer-hand" ).removeClass( "rock" );
    $( "#player-hand" ).addClass( this.player_hand );
    $( "#computer-hand" ).addClass( this.computer_hand );
  },

  addPoints: function() {
    if (( this.player_hand === "rock" && this.computer_hand === "scissors" ) ||
        ( this.player_hand === "paper" && this.computer_hand === "rock" ) ||
        ( this.player_hand === "scissors" && this.computer_hand === "paper" )) {
      this.wins.player += 1;
    } else if ( this.player_hand === this.computer_hand ) {
      return false;
    } else {
      this.wins.computer += 1;
    }
  },

  resetHandToRock: function() {
    $( ".hand" ).attr( "class", "hand rock" );
  }
};

var game = new Game();

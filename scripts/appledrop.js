function findIndexes( str, char ) {
  var result = [];
  var idx = str.indexOf( char );

  while ( idx !== -1 ) {
    result.push( idx );
    idx = str.indexOf( char, idx + 1 );
  }

  return result;
}

function randomNumberBetween( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

var Words = {
  collection: ["hello", "world", "banana", "orange", "panda", "computer", "ghost"],

  anyRemaining: function() {
    return this.collection.length > 0 ;
  },

  randomWord: function() {
    var random_index = Math.floor( Math.random() * this.collection.length );
    return this.collection.splice( random_index, 1 )[0];
  }
};

var WordDisplay = {
  init: function( word ) {
    this.word = word;
    this.create();
  },

  create: function() {
    for ( var i = 0; i < this.word.length; i++ ) {
      $( "#word" ).append( "<div class='letter'></div>" );
    }
  },
};

var Apples = {
  init: function( amount ) {
    this.amount = amount;
    this.create();
  },

  create: function() {
    for ( var i = 0; i < this.amount; i++ ) {
      $( "#tree" ).append( $( "<div></div>", {
        id: "apple_" + i,
        class: "apple",
        css: {
          "left": randomNumberBetween( 25, 72 ) + "%",
          "top":  randomNumberBetween( 15, 65 ) + "%"
        }
      }));
    }
  },

  drop: function( apple_number ) {
    var $apple = $( "#apple_" + apple_number );
    $apple.animate({
      top: "85%"
    }, "slow", "easeOutBounce" );
  },
};

var Game = {
  maximum_guesses: 6,

  init: function( word ) {
    this.guessed_letters = [];
    this.correct_letter_count = 0;
    this.incorrect_guess_count = 0;
    this.word = word;
    this.word_display = Object.create( WordDisplay );
    this.word_display.init( word );
    this.apples = Object.create( Apples );
    this.apples.init( this.maximum_guesses );
  },

  processGuess: function( letter ) {
    if ( this.isValidLetter( letter ) ) {
      if ( this.word.includes( letter ) ) {
        this.insertLetterAt( letter, findIndexes( this.word, letter ) );
      } else {
        this.displayIncorrectLetter( letter );
        this.apples.drop( this.incorrect_guess_count );
        this.incorrect_guess_count++;
      }

      this.guessed_letters.push( letter );
    }
  },

  isValidLetter: function( letter ) {
    if ( letter.match( /[a-z]/ ) && !this.guessed_letters.includes( letter ) ) {
      return true;
    } else { return false; }
  },

  insertLetterAt: function( letter, positions ) {
    for ( var i = 0; i < positions.length; i++ ) {
      $( "#word" ).find( "div:eq(" + positions[i] + ")" ).html( "<p>" + letter + "</p>" );
      this.correct_letter_count++;
    }
  },

  displayIncorrectLetter: function( letter ) {
    $( "#incorrect-guesses" ).append( "<span class='guessed-letter'>" + letter + "</span>" );
  },

  isGameWon: function() {
    return ( this.correct_letter_count  === this.word.length ) ? true : false;
  },

  isGameLost: function() {
    return ( this.incorrect_guess_count === this.maximum_guesses ) ? true : false;
  },

  isGameOver: function() {
    return ( this.isGameWon() || this.isGameLost() ) ? true : false;
  },
};

var GamesMaster = {
  init: function() {
    this.words = Object.create( Words );
    this.createGame();
  },

  createGame: function() {
    this.resetDisplay();
    this.game = Object.create( Game );
    this.game.init( this.words.randomWord() );
    this.bindGameKeys();
  },

  bindReplayLink: function() {
    var that = this;

    $( "nav a" ).on( "click", function(e) {
      e.preventDefault();
      if ( that.words.anyRemaining() ) {
        that.createGame();
      } else {
        $( "nav" ).html( "No more words left to guess!" );
      }
    });
  },

  bindGameKeys: function() {
    $(document).on("keypress", this.sendGuess.bind( this ) );
  },

  unbindGameKeys: function() {
    $(document).off("keypress");
  },

  sendGuess: function( e ) {
    e.preventDefault();
    this.game.processGuess( String.fromCharCode( e.which ) );
    if ( this.game.isGameOver() === true ) { this.endGame(); }
  },

  endGame: function() {
    this.unbindGameKeys();
    if ( this.game.isGameWon() === true) { this.winningDisplay(); } else { this.losingDisplay(); }
    this.bindReplayLink();
  },

  winningDisplay: function() {
    $( "body" ).addClass( "sunny" );
    $( "nav" ).html( "<a href='#' id='again'>You win! Click to play again.</a>" );
  },

  losingDisplay: function() {
    $( "body" ).addClass( "ghosty" );
    $( "nav" ).html( "<a href='#'>Game Over! Click to play again.</a>" );
  },

  resetDisplay: function() {
    $( ".apple" ).remove();
    $( ".letter" ).remove();
    $( ".guessed-letter" ).remove();
    $( "body" ).removeClass( "sunny ghosty" );
    $( "nav" ).empty();
  },
};

var games_master = Object.create( GamesMaster );
games_master.init();

var menuState = {

	create: function() {

		// Here we display the name of the game. When defining text, the
		// first two parameters are x and y positional values, then the
		// actual text, and then the 'font' defines the font (of course)
		// and 'fill' refers to the font color.
		var nameLabel = game.add.text(80, 80, 'My Frst Game', 
									{font: '50px Arial', fill: '#ffffff' });
		
		// We give the player intructions on how to start the game
		var startlabel = game.add.text(80, game.word.height-80,
										'press the "w" key to start',
										{font: '25px Arial', fill: '#ffffff' });

		// We define the wkey as Phaser.Keyboard.W so that we can act
		// when the player presses it
		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		// When the player presses the w key, we call the start function
		wkey.onDown.addOnce(this.start, this);
	},

	// The start function calls the plays state
	start: function() {
		game.state.start('play');
	}
};
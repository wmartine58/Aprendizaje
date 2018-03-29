var loadState = {

	// The preload function is another function standard Phaser function taht we 
	// use to define and load our assets
	preload: function() {

		// Add a loading label on the screen
		var loadingLabel = game.add.text(80, 150, 'loading...', 
										{font: '30px Courier', fill: '#ffffff'} );

		// Load all assets. The first parameter is 	the variable that
		// will point to the image, and the second parameter is the
		// image file itself.
		game.load.image('player', 'assets/player.png');
		game.load.image('win', 'assets/win.png');

	},

	create: function() {
		// Call the menu state
		game.state.start('menu');
		console.log("empezar");
	}
};
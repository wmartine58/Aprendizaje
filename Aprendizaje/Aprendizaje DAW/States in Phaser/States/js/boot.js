
//Here we use the 'official name' (bootstate) when defining the state
var bootState = {

	// The create function is a standard Phaser funcion, and is
	// automatically called
	create: function() {

		// Starting the physics system - in this case we are using the
		// simple (but effective) ARCADE physics engine
		game.physics.startSystems(Phaser.Physics.ARCADE);

		// Calling the load state
		game.state.start('load');
		console.log("empezan a bootear");
	}
};
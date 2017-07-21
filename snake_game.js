$(document).ready(function(){
	
	var snake_size = 10;

	function Snake(x, y){
		this.x = x;
		this.y = y;
		this.height = 4;
		this.width = 4;
		this.score = 0;
		this.size = [];
	}

	function Food(){
		this.x = 0;
		this.y = 0;
		this.height = 4;
		this.width = 4;
	}

	Food.prototype.update = function(){
	// Spawn more food when one is eaten.
	}

	Food.prototype.draw = function(f){
	// Food border color
		f.fillStyle = 'darkGreen';
		f.fillRect(this.x, this.y, this.width, this.height);
	}


	function Game(){
	// Set the canvas to a varriable
		var snake_canvas = $("#game")[0];
	// Set the width and height from the canvas
		this.width = snake_canvas.width;
		this.height = snake_canvas.height;
	// Get the 2D context from the canvas
		this.context = snake_canvas.getContext("2d");


	// Make some food
		this.food = new Food();
		this.food.x = Math.random()*this.width;
		this.food.y = Math.random()*this.height;

	}

	Game.prototype.draw = function(){
		this.context.clearRect(0, 0, this.width, this.height);
	// Draw the food
		this.food.draw(this.context);
	}

	var game = new Game();

	function MainLoop(){
		// game.update();
		console.log("the game is running");
		game.draw();

		setTimeout(MainLoop, 33.3333);
	}

	MainLoop();
});
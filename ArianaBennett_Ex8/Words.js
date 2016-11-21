var Words = function(name) {
	this.position = createVector(random(width), random(100, height));
	this.velocity = createVector(random(-2, 2), random(-2, 2));
	this.name = name;

	this.run = function() {
		this.check();
		this.move();
		this.display();
	}

	this.display = function() {
		textFont(font1, 30);
		fill(255);
		text(this.name, this.position.x, this.position.y);
	}

	this.move = function() {
		this.position.add(this.velocity);
	}

//the phrases move around the screen and bounce the other when when the reach the edge of the canvas 
	this.check = function() {
		textAlign(CENTER);
		if (this.position.x > width) {
			this.velocity.x *= -1;
		}
		if (this.position.x < 0) {
			this.velocity.x *= -1;
		}
		if (this.position.y > height) {
			this.velocity.y *= -1;
		}
		if (this.position.y < 100) {
			this.velocity.y *= -1;
		}

	}
}
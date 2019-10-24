// fractal branching algorhythm
// with variation and generational changes to color

var angle; // variable to hold angle in radians
var button; // "new tree" button

function setup() {
	var myCanvas = createCanvas(windowWidth * 0.8, windowWidth * 0.4);
// Move the canvas so it's inside a div.
  myCanvas.parent('sketch');
	createP(" ");
	var button = createButton("new tree");
	button.parent('sketch');
	button.mousePressed(clearBg);
}

function draw() {
	background(23);

	push();
	translate(width/2, height);
	stroke(139,69,19);

	branch(120, 1);
	pop();
	noLoop();
}

function clearBg() {
	background(23);
	push();
	translate(width/2, height);
	stroke(139,69,19);
	branch(random(100, 140), 1); // generate a random length; set generation to 1
	pop();
}

// branch - accepts two arguments: 1. len = branch length, 2: generation 
function branch(len, generation) {

	strokeWeight(10 - generation * 1.5); // reduce stroke weight each successive generation
	line(0, 0, 0, -len); // draw a line from origin to length "len"

	// Move to end of branch and scale it down
	translate(0, -len);
	len *= random(0.43,0.85);

// For any branches in first 4 generations, color them brown.  Else color them green.
	if (generation < 5) {
		stroke(139,69,19);
	} else {
		stroke(0,133,0);
	}

	generation += 1;

	if (len > 2) {
		var angle = PI/8;

		var n = floor(random(1, 3)); // variable to control HOW MANY BRANCHES
		for (var i = 0; i < n; i++) {
			push();
			rotate(random(angle-0.5, angle+0.5));
			branch(len, generation);
			pop(); // BEFORE YOU DRAW THE NEXT RIGHT BRANCH **SAVE** WHERE YOU ARE, GO BACK,
	
		// AND NOW DRAW A LEFT BRANCH	

		// Repeat the rotation and drawing of a branch, but to the LEFT this time
		push();
		rotate(random(-angle-0.5, -angle+0.5));
		branch(len, generation);
		pop();

		}
	}

}
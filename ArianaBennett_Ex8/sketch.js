// With a partner, do the following:
// take a story from https://www.gutenberg.org/ebooks/search/?sort_order=downloads
// bring the text into P5 as a string
// Use at least 3 expressions to parse the string of text.
// use http://regexr.com/ as guide to formulate your expressions

//For homework finish the above individually to also include:

// visualize your data in some interesting way.
// extra points for movement, procedural aspects or interactivity 
var story;
var font1;
var wholeTxt;
var joinedTxt;
var endNum;
var beginNum;

var storynew;
var phrasepos;
var whatwasit;
var endpos;
var w;
var words = [];
var doges = [];

var y = 20;

function preload() {
	wholeTxt = loadStrings('data/rapunzel_text.txt');
	font1 = loadFont('data/font1.otf');
}

function setup() {
	createCanvas(400, 400);
	background(0);
	joinedTxt = join(wholeTxt, "");
	beginNum = joinedTxt.indexOf("It was the best of times");
	endNum = joinedTxt.indexOf("roads that lay before them.");
	endNum += 27;

	story = joinedTxt.substring(beginNum, endNum);
	console.log(story);

	//itwasthe = story.match(/It was the/gi);
	storynew = story;

	//I use a while function to extra all of the phrases between "it was the" and the comma following to grab all of the phrases
	//10 total, so runs while the array < 0
	//I push the phrases into an array
	while (doges.length < 10) {
		phrasepos = story.indexOf(/it was the/i) + 12;
		storynew = story.substring(phrasepos, endNum);
		endpos = storynew.indexOf("\,");
		whatwasit = storynew.substring(0, endpos);
		console.log(phrasepos);
		console.log(storynew);
		console.log(endpos);
		console.log(whatwasit);
		doges.push(whatwasit);
		story = storynew.substring(endpos, endNum);
		console.log(story);
	}

	for (i = 0; i < doges.length; i++) {
		//create Words class out of each phrase in array
		w = new Words(doges[i]);
		words.push(w);
	}

}

function draw() {
	background(0, 150);
	fill(255);
	textFont(font1, 50);
	text('It was the', width/2, 50);
	for (i = 0; i < words.length; i++) {
		words[i].run();
	}

	//console.log(doges);
	//noLoop();

}
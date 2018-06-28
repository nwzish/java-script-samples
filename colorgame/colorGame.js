var pads = document.querySelectorAll("#container");



var numberOfSquares = 6;
var color = generateRandomColor(numberOfSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = randomColorPick();
var colorSelected = document.getElementById('colorSelected');
var message = document.getElementById('message');
var newColors = document.querySelector("#newColors");
var headerBackground = document.querySelector("#Header");
var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");

colorSelected.textContent = pickedColor;

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

	headerBackground.style.background = "rgb(70,110,255)";
	numberOfSquares = 6;
	color = generateRandomColor(numberOfSquares);

	pickedColor = randomColorPick();
	colorSelected.textContent = pickedColor;

	
	for(var i=0;i<squares.length;i++){
		
			squares[i].style.background = color[i];
			squares[i].style.display = "block";
		
	}

});

easyBtn.addEventListener("click",function(){
	//toggle selection of buttons
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	headerBackground.style.background = "rgb(70,110,255)";
	numberOfSquares = 3;
	color = generateRandomColor(numberOfSquares);

	//picking color one of 3 squares
	pickedColor = randomColorPick();
	colorSelected.textContent = pickedColor;


	
	for(var i=0;i<squares.length;i++){
		if(color[i]){
			squares[i].style.background = color[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

newColors.addEventListener("click",function(){
	message.textContent = " ";
	headerBackground.style.background = "rgb(70,110,255)";

	//generate new colors
	color = generateRandomColor(numberOfSquares);
	//pick color
	pickedColor= randomColorPick();

	//update colorname of header
	colorSelected.textContent = pickedColor;


	//change color of squares

	for(var i=0;i<squares.length;i++){
		squares[i].style.background = color[i];
	}
	//update text of button
	newColors.textContent = "NEW COLORS";
});


for(var i=0;i<squares.length;i++){
	//Color Given to squares
	squares[i].style.background = color[i];

	//Listener to squares
	squares[i].addEventListener("click", function(){
		var colorClicked = this.style.background;
		
		
		if(colorClicked===pickedColor){
			message.textContent = "Correct";
			changeColors(colorClicked);
			headerBackground.style.background = colorClicked;
			newColors.textContent = "Try Again";

		}
		else{
			this.style.background = "#232323";
			message.textContent = "Try Again";
			headerBackground.style.background = "#232323";
		}
	});
	
}

function changeColors(color){

	for(var i =0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}



function generateRandomColor(num){
	var col = [];
	for(var  i=0;i<num;i++){
		var rgb=[];
		for(var j=0;j<3;j++){
			rgb.push(Math.floor(Math.random()*255+1));
		}
		var c = "rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")";
		col.push(c);
		
	}

	return col;
}

function randomColorPick(){
	var random = Math.floor(Math.random()*color.length);
	return color[random];
}
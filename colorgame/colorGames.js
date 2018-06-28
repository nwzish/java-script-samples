var numberOfSquares=6;
var color =[];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorSelected = document.getElementById('colorSelected');
var message = document.getElementById('message');
var newColors = document.querySelector("#newColors");
var headerBackground = document.querySelector("#Header");
var modeButton = document.querySelectorAll(".btnn");
var easyBtn = document.querySelector("#easyBtn");

// colorSelected.textContent = pickedColor;

init();

function init(){
	modeListener();
	squareListener();	
	reset();
}

function modeListener(){
	for(var i=0;i<modeButton.length;i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="EASY" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}
}

function squareListener(){
	for(var i=0;i<squares.length;i++){
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
}

function reset(){
	
	message.textContent = "";
	headerBackground.style.background = "rgb(70,110,255)";
	//generate new colors
	color = generateRandomColor(numberOfSquares);
	//pick color
	pickedColor= randomColorPick();
	//update colorname of header
	colorSelected.textContent = pickedColor;
	//change color of squares
	for(var i=0;i<squares.length;i++){
		if(color[i]){
		squares[i].style.display = "block"
		squares[i].style.background = color[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	//update text of button
	newColors.textContent = "NEW COLORS";
}

newColors.addEventListener("click",function(){
	reset();
});

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
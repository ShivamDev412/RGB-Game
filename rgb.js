var noSquare=6;
var color=generateRandomColor(noSquare);   						//for generating new color
var check= document.querySelector(".check");  
var pickedColor=randome();									// for setting random color goal
var square=document.querySelectorAll(".box");			//for all squares
var colorDisplay=document.getElementById("targetheading");
var h1=document.querySelector("h1");
var refreshGame=document.getElementById("refreshGame");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");


colorDisplay.innerHTML=pickedColor;
// Manupulating the boxes 
for(var i=0;i<square.length;i++){
	//setting initial color
	square[i].style.backgroundColor=color[i];
//An event to check the rigth choice 
	square[i].addEventListener("click",function(){
		//picked square
	   var clickedColor=this.style.backgroundColor;
	   if(pickedColor===clickedColor){
	   	check.innerHTML="CORRECT";
	   	refreshGame.textContent="Play Again";
	   	changeAllBoxColor(pickedColor);
	   	h1.style.background = clickedColor;
	   }
	   else{
	   	this.style.backgroundColor= "#232323";
	   	check.innerHTML="Try Again";
	   }
	});
}
	easybtn.addEventListener("click",function(){
		var noSquare=3;
		easybtn.classList.add("selected");
		hardbtn.classList.remove("selected");
		color=generateRandomColor(noSquare);
		pickedColor=randome();
		colorDisplay.innerHTML=pickedColor;
		for(var i=0;i<square.length;i++){
			if(color[i]){
				square[i].style.backgroundColor=color[i];
			}
			else{
				square[i].style.display="none"; 
			}
		}
	})
	hardbtn.addEventListener("click",function(){
		easybtn.classList.remove("selected");
		hardbtn.classList.add("selected");
		noSquare=6
		color=generateRandomColor(noSquare);
		pickedColor=randome();
		colorDisplay.innerHTML=pickedColor;
		for(var i=0;i<square.length;i++){
				square[i].style.backgroundColor=color[i];
				square[i].style.display="block"; 
			}
		})


refreshGame.addEventListener("click",function(){
	noSquare=6;
	color=generateRandomColor(noSquare);
	pickedColor=randome();
	colorDisplay.textContent=randome();
	for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=color[i];
}
h1.style.backgroundColor="steelblue";
})



function randome(){
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}
 function generateRandomColor(noOfColor){
 	var arr=[];
 	for(var i=0;i<noOfColor;i++){
 		arr.push(getNewRgb());
	}
	return arr;
 }
 function getNewRgb(){
 	var r=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
 }
 function changeAllBoxColor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}
}
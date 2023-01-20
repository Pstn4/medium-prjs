canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greenCwidth=75;
greenCheight=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greenC_x=5
greenC_y=225

function add() {
	bg_imgT=new Image();
	bg_imgT.onload=uploadBackground;
	bg_imgT.src=background_image;

	greencar_imgT=new Image();
	greencar_imgT.onload=uploadBackground;
	greencar_imgT.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(bg_imgT,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgT,greenC_x,greenC_y,greenCwidth,greenCheight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greenC_y>=0 ){
		greenC_y=greenC_y-10;
		console.log("when up arrow is pressed ,x="+greenC_x+" y="+greenC_y);
		uploadBackground();
		uploadgreencar();

	}
}

function down()
{
	if(greenC_y<=350 ){
		greenC_y=greenC_y+10;
		console.log("when down arrow is pressed ,x="+greenC_x+" y="+greenC_y);
		uploadBackground();
		uploadgreencar();

	}
}

function left()
{
	if(greenC_x>=0 ){
		greenC_x=greenC_x-10;
		console.log("when left arrow is pressed ,x="+greenC_x+" y="+greenC_y);
		uploadBackground();
		uploadgreencar();

	}
}

function right()
{
	if(greenC_x<=750 ){
		greenC_x=greenC_x+10;
		console.log("when right arrow is pressed ,x="+greenC_x+" y="+greenC_y);
		uploadBackground();
		uploadgreencar();

	}
}

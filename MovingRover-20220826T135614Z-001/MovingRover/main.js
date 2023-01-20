canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=10;
rover_y=10;
rover_W=100;
rover_H=90;
rover_image="rover.png";


mars_array=["rover_1.jpg","rover_2.jpg","rover_3.jpg","rover_4.jpg"]
random_num=Math.floor(Math.random()*4);
console.log(random_num);
background_img=mars_array[random_num];

function add()
{
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_img;
    rover_imagetag=new Image()
    rover_imagetag.onload=uploadRover;
    rover_imagetag.src=rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadRover()
{
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_W,rover_H);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="37")
    {
        left();
        console.log("left");

    }
    
    if (keyPressed=="38")
    {
        up();
        console.log("up");
        
    }

    if (keyPressed=="39")
    {
        right();
        console.log("right");
        
    }

    if (keyPressed=="40")
    {
        down();
        console.log("down");
        
    }
}
function up()
{
    if (rover_y >=0)
    {
rover_y=rover_y-10;
console.log("up is pressed"+rover_y);
uploadBackground();
uploadRover();

    }
}
function down()
{
    if (rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log( "down is pressed"+rover_y);
        uploadBackground();
        uploadRover();

    }
}
function right()
{
    if (rover_x <=700){
        rover_x=rover_x+10;
console.log("right is pressed"+rover_x)
uploadBackground();
uploadRover();
}
}
function left()
{
    if (rover_x >=0)
    {
    rover_x=rover_x-10;
console.log("left is pressed"+rover_x)
uploadBackground();
uploadRover();
    }
}
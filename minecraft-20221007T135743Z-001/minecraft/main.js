var canvas=new fabric.Canvas("myCanvas");
b_width=30;
b_height=30;
player_x=10;
player_y=10;
block_object="";
var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top:player_y,left:player_x});
        canvas.add(player_object);
    });
    

}
function new_img(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
    
        block_object=Img;
        block_object.scaleToHeight(b_height);
        block_object.scaleToWidth(b_width);
        block_object.set({top:player_y,left:player_x});
        canvas.add(block_object);
    });
    
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e)
{
keypressed=e.keyCode;
console.log(keypressed);
if (e.shiftKey==true && keypressed=="80")
{
console.log("shift and p pressed together");
b_width=b_width+10;
b_height=b_height+10;
document.getElementById("width").innerHTML=b_width;
document.getElementById("height").innerHTML=b_height;
}
if (e.shiftKey==true && keypressed=="77")
{
    console.log("shift key and m pressed together");
    b_width=b_width-10;
    b_height=b_height-10;
    document.getElementById("width").innerHTML=b_width;
    document.getElementById("height").innerHTML=b_height;
}
if(keypressed=="37")
{
left();
console.log("left");
}
if (keypressed=="38")
{
    up();
    console.log("up");
}
if(keypressed=="39")
{
right();
console.log("right");
}
if (keypressed=="40")
{
    down()
    console.log("down");
}
if (keypressed=="87")
{
    new_img("wall.jpg");
    console.log("w");
}
if (keypressed=="71")
{
    new_img("ground.png");
    console.log("g");
}
if (keypressed=="76")
{
    new_img("light_green.png");
    console.log("l");
}
if (keypressed=="84")
{
    new_img("trunk.jpg");
    console.log("t");
}
if (keypressed=="82")
{
    new_img("roof.jpg");
    console.log("r");
}
if (keypressed=="89")
{
    new_img("yellow_wall.png");
    console.log("y");
}
if (keypressed=="68")
{
    new_img("dark_green.png");
    console.log("d");
}
if (keypressed=="67")
{
    new_img("cloud.jpg");
    console.log("c");
}
if (keypressed=="85")
{
    new_img("unique.png");
    console.log("u");
}
}
function up()
{
if (player_y>=0)
{
    player_y=player_y-b_height;
    console.log("when up arrow is pressed,x="+player_x+" ,y="+player_y);
    canvas.remove(player_object);
    player_update();
}
}
function down()
{
    if (player_y<=500)
    {
        player_y=player_y+b_height;
        console.log("when down arrow is pressed,x="+player_x+" ,y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function left()
{
    if (player_x>=0)
    {
        player_x=player_x-b_width;
        console.log("when left arrow is pressed,x="+player_x+" ,y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function right()
{
    if (player_x<=850)
    {
        player_x=player_x+b_width;
        console.log("when right arrow is pressed,x="+player_x+" ,y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}
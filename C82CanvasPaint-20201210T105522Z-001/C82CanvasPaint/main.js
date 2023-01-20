var mouseEvent="";
var last_x="";
var last_y="";
var color="blue";
var widthOfLine=2;
var current_x="";
var current_y="";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    mouseEvent="mouseDown";
    widthOfLine=document.getElementById("width_of_line").value;

}
canvas.addEventListener("mouseup",my_mouseup)

function my_mouseup(e)
{
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine;
        console.log("last position of x= "+last_x+" Last position of Y= "+last_y);
        ctx.moveTo(last_x,last_y);
        console.log("current position of x= "+current_x+" current position of y= "+current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
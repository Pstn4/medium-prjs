var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 Block_IObject="";
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img)
    {
        Block_IObject=Img;
        Block_IObject.scaleToWidth(700);
        Block_IObject.scaleToHeight(510);
        Block_IObject.set({top:0,left:0});
        canvas.add(Block_IObject);
    });
	
}

function playSound(){
	x.play();
}

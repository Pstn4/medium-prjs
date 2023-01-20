var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event) {

    console.log(event);
    var Content= event.results[0][0].transcript;
    console.log(Content);
    if (Content=="take my selfie")
    {
        
        speak();
    }

    document.getElementById("textbox").innerHTML=Content;
    Webcam.attach(camera);
    setTimeout(
        function()
        {
            Takesnap();
            Save();
        },5000
    );
}
function speak()
{
    var synth=window.speechSynthesis;
    var utterthis=new SpeechSynthesisUtterance("taking your selfie in 5 seconds");
    synth.speak(utterthis);
}

Webcam.set({width:360,height:250,image_format:"jpeg",jpeg_quality:90});
camera=document.getElementById("camera");

function Takesnap()
{
    Webcam.snap(
        function(data_uri)
        {
            document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'>";
        }
    );
}

function Save()
{
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}
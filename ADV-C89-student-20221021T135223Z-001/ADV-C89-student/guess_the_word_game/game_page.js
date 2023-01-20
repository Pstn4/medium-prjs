player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
questionturn="player1";
answerturn="player2";

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("Question").innerHTML="Question turn- "+player1_name;
document.getElementById("Answer").innerHTML="Answer turn- "+player2_name;
function send()
{
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log(word);

    charAt1=word.charAt(1);
    console.log(charAt1);
    
    middlechar=Math.floor(word.length/2);
    charAt2=word.charAt(middlechar);
    console.log(charAt2);

    lastchar=word.length-1;
    charAt3=word.charAt(lastchar);
    console.log(charAt3);
    
    remove1=word.replace(charAt1,"_");
    remove2=remove1.replace(charAt2,"_");
    remove3=remove2.replace(charAt3,"_");
    console.log(remove3);

    questionword="<h4 id='word_display'> Q. "+remove3+"</h4>";
    inputbox="<br>Answer : <input type=text id='input_checkbox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check!</button>";
    row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function check()
{
  getAnswer=document.getElementById("input_checkbox").value;
  answer=getAnswer.toLowerCase();
  console.log(answer);

  if (answer==word)
  {
    if (answerturn=="player1")
    {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
        questionturn="player1";
        answerturn="player2";
        document.getElementById("Question").innerHTML="Question turn- "+player1_name;
        document.getElementById("Answer").innerHTML="Answer turn- "+player2_name;
    }
    else 
    {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
        questionturn="player2";
        answerturn="player1";
        document.getElementById("Question").innerHTML="Question turn- "+player2_name;
        document.getElementById("Answer").innerHTML="Answer turn- "+player1_name;
    }
  }
  document.getElementById("output").innerHTML="";
}
score=0;
function updatescore()
{
score=score+1;
document.getElementById("score").innerHTML="Score : "+score;
}
function saveScore()
{
    localStorage.setItem("score",score);
}
function next()
{
    window.location="activity_2.html";
}
function addUser()
{
    Player1_name=document.getElementById("player1").value;
    Player2_name=document.getElementById("player2").value;

    localStorage.setItem("player1",Player1_name);
    localStorage.setItem("player2",Player2_name);

    window.location="game_page.html";
}
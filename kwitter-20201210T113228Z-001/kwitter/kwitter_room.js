var firebaseConfig = {
      apiKey: "AIzaSyDiswYrA6Zy8HZs3zX1v0V2PzmQuPMXPiM",
      authDomain: "kwitter-b15de.firebaseapp.com",
      databaseURL: "https://kwitter-b15de-default-rtdb.firebaseio.com",
      projectId: "kwitter-b15de",
      storageBucket: "kwitter-b15de.appspot.com",
      messagingSenderId: "110594776813",
      appId: "1:110594776813:web:c9af44678ddce16337f6e4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" to Kwitter!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirect(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout()
{
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}
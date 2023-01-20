var firebaseConfig = {
      apiKey: "AIzaSyA39qPDcNf5PWfPCEyLx4dXyDBRG7iBrVI",
      authDomain: "letschat-39cd9.firebaseapp.com",
      databaseURL: "https://letschat-39cd9-default-rtdb.firebaseio.com",
      projectId: "letschat-39cd9",
      storageBucket: "letschat-39cd9.appspot.com",
      messagingSenderId: "211725226230",
      appId: "1:211725226230:web:0a6cd861496f16c4e51cd7",
      measurementId: "G-X3WLDF85HD"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" to Chatter!";

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
      window.location="Chatter_page.html";
}
function redirect(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="Chatter_page.html"
}
function logout()
{
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}
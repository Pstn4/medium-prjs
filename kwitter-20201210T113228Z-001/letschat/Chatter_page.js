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
    
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name =message_data["name"];
      message=message_data["message"];
      like=message_data["like"];
      name_tag="<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
      message_tag="<h4 class='message_h4'>"+message+"</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='newlike(this.id)'>";
      span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
      row=name_tag+message_tag+like_button+span_tag;
      document.getElementById("output").innerHTML+=row;
      
//End code
   } });  }); }
getData();

function newlike(message_id)
{
      console.log("clicked on like button "+message_id);
      
      likes=document.getElementById(message_id).value;
      updated_likes=Number(likes)+1;
      console.log("updated likes= "+updated_likes);
      firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
}


function logout()
{
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}


function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0});
      document.getElementById("msg").value=" ";
}
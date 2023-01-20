var firebaseConfig = {
      apiKey: "AIzaSyDiswYrA6Zy8HZs3zX1v0V2PzmQuPMXPiM",
      authDomain: "kwitter-b15de.firebaseapp.com",
      databaseURL: "https://kwitter-b15de-default-rtdb.firebaseio.com",
      projectId: "kwitter-b15de",
      storageBucket: "kwitter-b15de.appspot.com",
      messagingSenderId: "110594776813",
      appId: "1:110594776813:web:c9af44678ddce16337f6e4"
    };
    user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

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
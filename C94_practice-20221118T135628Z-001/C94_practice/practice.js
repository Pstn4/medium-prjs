var firebaseConfig = {
    apiKey: "AIzaSyCexuh326SwGHJ5daWNgTu-dNMAR1hDMKQ",
  authDomain: "practice-124c1.firebaseapp.com",
  databaseURL: "https://practice-124c1-default-rtdb.firebaseio.com",
  projectId: "practice-124c1",
  storageBucket: "practice-124c1.appspot.com",
  messagingSenderId: "386438432260",
  appId: "1:386438432260:web:1119ea041d70a4d3301751"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function add()
{
    user_name=document.getElementById("User_Name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"Add user"});
}
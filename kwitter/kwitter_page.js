//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAEShqMrPDLmb8g6XP2ecCS9reZNBaevnM",
      authDomain: "kwitter-a5381.firebaseapp.com",
      projectId: "kwitter-a5381",
      storageBucket: "kwitter-a5381.appspot.com",
      messagingSenderId: "718186417226",
      appId: "1:718186417226:web:b55317f64dc0cc73e5eab3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    User_name = localStorage.getItem("user_name") ;
    Room_name = localStorage.getItem("room_name") ;

    function Send() {
             msg = document.getElementById("msg").value ;
             firebase.database().ref(Room_name).push({
                   name: User_name, 
                   message: msg , 
                   like: 0

             }) ;

             document.getElementById("msg").value=""
      
             
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
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

    Username = localStorage.getItem("user_name") ;
   document.getElementById("user_name").innerHTML = "Welcome" + Username ;
   
   function Addroom() {
            
       RoomName = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(RoomName).update({
            purpose: "adding room name" 
      }) ;
      localStorage.setItem("room_name", RoomName) ;
      window.location = "kwitter_page.html"
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - " + RoomName)

      //Start code

       Row = "<div class='room_name' id="+Room_names +" onclick = redirectToRoomName(this.id)' >#"+Room_names+"></div> <hr>" ;
       document.getElementById("output").innerHTML += Row ;
       
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name) ;
      localStorage.setItem("room_name" , name) ;
      window.location = "kwitter_page.html" ;
      
         
}

function logout() {
        localStorage.removeItem("User_name") ;
        localStorage.removeItem("Room_name") ;

        window.location = "index.html" ;
        
      
}
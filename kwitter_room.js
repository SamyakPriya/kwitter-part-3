
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBpmgAr_T5XYBRz_YNmGG410_3UumKk-dY",
      authDomain: "kwiter-4c140.firebaseapp.com",
      databaseURL:"https://kwiter-4c140-default-rtdb.firebaseio.com/",
      projectId: "kwiter-4c140",
      storageBucket: "kwiter-4c140.appspot.com",
      messagingSenderId: "321375326393",
      appId: "1:321375326393:web:9552780fd05dc8c9428b68"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class ='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)' >#" +Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location ="kwitter_page.html";
}

function redirecToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
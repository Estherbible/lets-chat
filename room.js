const firebaseConfig = {
    apiKey: "AIzaSyCdpUOUaudRHKhUw7pIE9chbsU6IYkPzew",
    authDomain: "kwitter-f8e0d.firebaseapp.com",
    databaseURL: "https://kwitter-f8e0d-default-rtdb.firebaseio.com",
    projectId: "kwitter-f8e0d",
    storageBucket: "kwitter-f8e0d.appspot.com",
    messagingSenderId: "915477354556",
    appId: "1:915477354556:web:55d702baf4d0f23bba4b39",
    measurementId: "G-FQQ78BDNNR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
username = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Welcome " + username + " !!! "
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)'>#" + Room_names + "</div> <hr>"
                document.getElementById("output").innerHTML += row;
                //End code
          });
    });
}
getData();

function logout() {
    window.location = "index.html";
}

function addRoom() {
    var roomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomName).update({ purpose: "adding Room Name" })
    localStorage.setItem("roomName", roomName);
    window.location = "kwitter_page.html"
}

function redirectToRoom(id){
    localStorage.setItem("roomName", id);
    window.location = "kwitter_page.html"
}

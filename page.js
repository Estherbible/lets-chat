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
room_name= localStorage.getItem("roomName");
user_name= localStorage.getItem("userName");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}
function send(){
message=document.getElementById("message").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:message,
    like:0
});
document.getElementById("message").value="";
}
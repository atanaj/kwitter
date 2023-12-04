var firebaseConfig = {
      apiKey: "AIzaSyD1iyJjwA8c4agpRqTwBv5BASgEblSeZyc",
      authDomain: "kwitter2-2be5c.firebaseapp.com",
      databaseURL: "https://kwitter2-2be5c-default-rtdb.firebaseio.com",
      projectId: "kwitter2-2be5c",
      storageBucket: "kwitter2-2be5c.appspot.com",
      messagingSenderId: "293531061304",
      appId: "1:293531061304:web:717ebad39b9a4ec2baaacd"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "addingroomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

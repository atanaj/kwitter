 const config = {
      apiKey: "AIzaSyD1iyJjwA8c4agpRqTwBv5BASgEblSeZyc",
      authDomain: "kwitter2-2be5c.firebaseapp.com",
      databaseURL: "https://kwitter2-2be5c-default-rtdb.firebaseio.com",
      projectId: "kwitter2-2be5c",
      storageBucket: "kwitter2-2be5c.appspot.com",
      messagingSenderId: "293531061304",
      appId: "1:293531061304:web:717ebad39b9a4ec2baaacd"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById ("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
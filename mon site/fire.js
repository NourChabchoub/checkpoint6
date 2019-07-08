var firebaseConfig = {
    apiKey: "AIzaSyAmqaZJol4LvIysxFg7om7PpTbweh6d7g8",
    authDomain: "projet08.firebaseapp.com",
    databaseURL: "https://projet08.firebaseio.com",
    projectId: "projet08",
    storageBucket: "",
    messagingSenderId: "1052845192888",
    appId: "1:1052845192888:web:5fd4dc36c70551ac"
  };
  firebase.initializeApp(firebaseConfig);


  var messagesRef=firebase.database().ref('myDatabase');

function submitForm(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var track=document.getElementById('track').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    console.log(name)
    saveMessage(name,track,email,phone);
}
document.getElementById('contactForm').addEventListener('submit',submitForm);

function saveMessage(name,track,email,phone){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
        name:name,
        track:track,
        email:email,
        phone:phone,      
    });
}


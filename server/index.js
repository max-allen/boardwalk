const firebase = require('firebase')
const express = require('express')
const path = require('path')

let app =  express();

app.listen(3000, () => {
	console.log("Listening on 3000.")
})

let fbData = {}

app.get('/api/db', (req,res) => res.json(fbData))
app.use((req,res) => console.log('error: not found'))

let config = {
apiKey: "AIzaSyC4esZbPjc4ONnF3wRuwhrb7LCDjATePCE",
authDomain: "boardwalk-eb71e.firebaseapp.com",
databaseURL: "https://boardwalk-eb71e.firebaseio.com",
projectId: "boardwalk-eb71e",
storageBucket: "boardwalk-eb71e.appspot.com",
messagingSenderId: "856677490237"
};

firebase.initializeApp(config);

const writeUserData = (userId, name, email, imageUrl) => {
	firebase.database().ref('users/'+userId).set({
		username:name,
		email:email,
		profile_picture:imageUrl
	});
}

const deleteData = (data) =>{
	firebase.database().ref(data).remove();
}

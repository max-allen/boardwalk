const express = require('express');
const app = express();
const router = express.Router();
module.exports = router

router.get('/', (req, res) => {
	res.send('homepage');
});


app.use('/', router);

app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.listen(3000, () => {
	console.log("Listening on 3000.")
})

let config = {
apiKey: "AIzaSyC4esZbPjc4ONnF3wRuwhrb7LCDjATePCE",
authDomain: "boardwalk-eb71e.firebaseapp.com",
databaseURL: "https://boardwalk-eb71e.firebaseio.com",
projectId: "boardwalk-eb71e",
storageBucket: "boardwalk-eb71e.appspot.com",
messagingSenderId: "856677490237"
};

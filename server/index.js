const express = require('express')
const path = require('path')

let app =  express();

app.listen(3000, () => {
	console.log("Listening on 3000.")
})

app.get('/', (req,res) => {
	res.send('Boardwalk');
})
// 23-March-2021

var express = require('express')
var app = express()

const rootCall = (req , res) => res.send('Thank You So Much & Port Number : 3000') ;
app.get('/', rootCall)

const listening = () => console.log('Listening at port : 3000');
app.listen(3000, listening)






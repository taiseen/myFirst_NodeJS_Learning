// 23-March-2021

//npm init

//npm install -g nodemon
//nodemon index.js

var express = require('express')
var app = express()


// template for API Calling...
//##########################################
//app.get('Where', 'What to do');
//app.get('/URl', () => {});
app.get('/URL', (input, output) => {
    output.send()
});
//=================================================
app.get('/staticPart/:dynamicPart', (req, res) => {

    // req == reQuest 
    // res === reSponse
    res.send()

});




//##########################################
//##########################################
//##########################################
// User API
const rootCall = (req, res) => {
    const info = '<h1>Welcome To Node Js</h1>'
    res.send(info);
};
app.get('/', rootCall)

// user get this info by going to this url
// http://localhost:3000




//##########################################
//##########################################
//##########################################
// User API
const userInfo = (req, res) => {
    const info = {
        name: 'taiseen',
        age: 29,
        gender: 'Male',
        home: 'Dhaka'
    }
    res.send(info);
    // you will return this object, 
    // when anyone calls the /user API
};
app.get('/user', userInfo)


// user get this info by going to this url
// http://localhost:3000/user




//##########################################
//##########################################
//##########################################
// Fruit API
const banana = (req, res) => {
    const info = {
        name: 'banana',
        price: 10,
        quantity: 300,
        totalPrice: 3000,
    }
    res.send(info);
};
app.get('/fruit', banana);

// user get this info by going to this url
// http://localhost:3000/fruit/




//##########################################
//##########################################
//##########################################

const listening = () => {
    console.log('Listening at port : 3000')
}
app.listen(3000, listening)


//##########################################
//##########################################
//##########################################

// Dynamic API calling from browser URL 

const users = ['taiseen', 'andalib', 'shawon', 'shakib', 'sharin'];

app.get('/users/:id', (req, res) => {
    //console.log(req.params);
    //console.log(req.params.id);

    // Get data form users - browser URL parameter  
    const id = req.params.id;
    console.log(id);
    
    // ?sort=asc
    console.log(req.query);

    const name = users[id];

    // Send to users - browser Window
    //res.send(name)
    res.send({ id, name })
});





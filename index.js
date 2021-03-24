// 23-March-2021

// npm init
// npm install -g nodemon
// nodemon index.js

const express = require('express')
const app = express()


// npm install cors
// providing a Connect middleware that can be used to enable
const cors = require('cors')
app.use(cors())

// npm install body-parser
// POST এর body থেকে data গুলা access করার জন্য & 
// JSON এ convert করেতে পারার জন্য।
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// template for API Calling...
//##########################################
// app.get('কোথায়?', 'কি করতে হবে?');
// app.get('Where', 'What to do');
// app.get('/URl', () => {});
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
    const info = '<h1>Welcome To Node Js (<u>Server Site</u>)</h1>'
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
    // when anyone calls the /getUser API
};

//How will you open an api named getUser using express js?
app.get('/getUser', userInfo)

// user get this info by going to this url
// http://localhost:3000/getUser




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
    // console.log(req.query);
    // console.log(req.query.sort);

    //const name = users[id];
    const name = users[id - 1];

    // Send to users - browser Window
    // res.send(name)
    res.send({ id, name })
});


//##########################################
//##########################################
//##########################################

// Post API listening from browser URL 
// Catch User given Data from input field 
// & invoke Operation upon it... 
app.post('/addUser', (req, res) => {

    console.log("Data Receive...", req.body);

    // save to DataBase...
    const user = req.body;
    user.id = 101;
    res.send(user);

})






// DB Mongoose, DB session
import mongoos from 'mongoose';
import session from 'express-session';

//  API ROUTER 
import api from '../routes';

var express = require('express');
var app = express();
var user = require('../routes/user');

var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', express.static('public'));

// var myLogger = function(req, res, next) {
//     console.log(req.url);
//     next();
// };

// app.use(myLogger);

app.get('/', function(req, res){
    //
    res.send('hello world');
});

app.use('/user', user);

app.listen(3000, function(){
    console.log('example router is listening on port 3000 🟩');
});

// *************************
// *** 2020. 04. 17. *******
// *** author. hjchoi ******
// *** mongo DB connection *
// *************************

// mongo db connection
const db = mongoos.connection;
db.on('error', console.error);
db.once('open', () => {console.log('Conneted on mongodb server');});

// mongoose.connect('mongodb://username:password@host:'port/database=');
mongoos.connect('mongodb://localhost/codelab');

// use session
app.use(session({
    secret: 'CodeLab$1234',
    resave: false,
    saveUninitialized: true
}));

// *************************
// *** 2020. 04. 17. *******
// *** author. hjchoi ******
// * api router connection *
// *************************
app.use('/api', api);

/* handle error */
app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send('무언가 잘못됨.. 라우터에서 이상함');
});

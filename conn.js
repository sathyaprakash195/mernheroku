



var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://sathya:sathyapr123@cluster0-wrqpt.mongodb.net/merncrud?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('connected', console.error.bind(console, 'MongoDB connection successfull'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports=mongoose;
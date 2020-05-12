const express = require('express');
var app=express();
var bodyParser=require('body-parser');
var cors=require('cors');
var userroute=require('./routes/user');
app.use(bodyParser.json());
var dbconnection=require('./conn')
const path=require('path');
app.use(bodyParser.urlencoded({extended: true}));


app.use(cors());

const PORT=process.env.PORT || 5000;

  if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    
    
  }





app.use('/api/user',userroute);



app.listen(PORT, () => {
    console.log(`Server started on port`);
});
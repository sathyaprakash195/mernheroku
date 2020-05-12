const express = require('express');
const app=express();
const PORT=process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }
  
app.listen(PORT, () => {
    console.log(`Server started on port`);
});
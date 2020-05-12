const express = require('express');
const app=express();
const PORT=process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hiiii');
});

app.listen(5000, () => {
    console.log(`Server started on port`);
});
const express = require('express');
const app = express();
app.use('/products',require('./product-router'));
app.listen(8001,()=>{
    console.log('http server is running on port 8006')
})
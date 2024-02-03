const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8080;

app.get('/',(req,res) => {
    res.send("Hello");
});
app.get('/add/:num1/:num2',(req,res) => {
    console.log(req.params);
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    console.log(num1,num2);
    res.json(parseFloat(req.params.num1)+parseFloat(req.params.num2));
});
app.post('/add',(req,res) => {
    console.log(req.body);
    if (typeof(req.body.num1)!==undefined && typeof(req.body.num2)!==undefined ){
        res.send(num1+num2);
    }
    else{
        res.send("Please Provide NUmbers properly");
    }
});

app.listen(port);
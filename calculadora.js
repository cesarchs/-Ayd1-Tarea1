const express = require('express');
const app = express();

app.use(express.json());


app.get('/',(req, res) => {
    res.send('calculadora con node');
});

app.post('/api/suma',(req,res) => {
    num1 = req.body.num1
    num2 = req.body.num2
   res.send ((parseInt(num1) + parseInt(num2)).toString())
});

<<<<<<< HEAD
=======
app.post('/api/resta',(req,res) => {
    num1 = req.body.num1
    num2 = req.body.num2
res.send ((parseInt(num1) - parseInt(num2)).toString())
});
>>>>>>> info-201700634

const port = process.env.port || 3000;
app.listen(port, () => console.log('escuchando en el puerto 3000'))
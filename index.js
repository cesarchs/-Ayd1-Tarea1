const express = require('express');
const app = express();

app.use(express.json());

const Estudiante = [
 { name:'Cesar Leonel Chamale Sican', carnet:201700634}
];

app.get('/',(req, res) => {
    res.send('api con node');
});

app.get('/api/estudiante', (req, res) => {
    res.send(Estudiante);
});


const port = process.env.port || 4000;
app.listen(port, () => console.log('escuchando en el puerto 4000'))
// ver erro neste codigo


const express = require('express');
const app = express ();

app.get('/' , (req. res) => {
    res.send('Alo Mundo');

});
app.listen(8080 , () => {
    let data = new Date ();
    console.log('Servidor Iniciado em :'+ data);
});
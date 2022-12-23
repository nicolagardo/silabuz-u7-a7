//const express = require('express')


//const app = express();
module.exports = app => {
    
    
    app.get('/', (req, res) => {
        res.send('¡Hola, Mundo aula07!');
    })
    app.get('/login/v1', (req, res) => {
            res.send('En el login');
        })
        
}

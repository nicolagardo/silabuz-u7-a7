const express = require('express')
const app = express();
const routeApi = require('./index');
routeApi(app);

const  PORT = 3000;


app.listen(PORT, () => {
    console.log(`Aplicación corriendo en el pueto ${PORT}`);
    console.log(`Servido corriendo en http://127.0.0.2:${PORT}`);
})

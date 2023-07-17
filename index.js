const express = require('express');
const app = express();

//conectarse a la BD
var conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'silicon'
})

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("base de datos conectada");
    }
})
//fin conexión


// código fuente


//fin código
app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("servidor escuchando en el puerto 8080");
    }
});
// declaraciones y configuraciones iniciales

const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// fin de declaraciones y configuraciones iniciales

//conectarse a la BD
var connection = mysql.createConnection({
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
/*app.get('/api/persona', (req, res)=>{
    res.send("listar");
});*/

//req: es lo que llega desde el frontend (en nuestro caso Postman)
//res: lo que le envio desde el servidor al frontend
app.post('/api/persona', (req, res)=>{

    persona_a_insertar = [
        req.body.dni,
        req.body.nombre,
        req.body.apellido];
    
    
    $query = 'INSERT INTO persona (dni, nombre, apellido) VALUES (,,)'
    
    connection.query($query, persona_a_insertar, function(err, rows) {
        if (err) {
            res.send(err);
            return;
        } else {
            res.send("se creo la persona" + req.body.nombre + req.body.apellido);
        }

    })

   // res.send("crear");
});

app.put('/api/persona', (req, res)=>{
    res.send("modificar");
});

app.delete('/api/persona', (req, res)=>{
    res.send("eliminar");
});

//fin código
app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("servidor escuchando en el puerto 8080");
    }
});
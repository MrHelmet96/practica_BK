const express = require('express');
const app = express();

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("servidor escuchando en el puerto 8080");
    }
});
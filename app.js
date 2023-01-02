const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

/*app.listen(3001, () => {
    console.log("Conexion establecida con el servidor");
});*/

const port = process.env.PORT || 3001;
app.listen(port,()=>console.log('Servidor corriendo en puerto $(port)'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});
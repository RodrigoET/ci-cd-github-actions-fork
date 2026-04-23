const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "API Funcionando" });
})

app.get("/clients", (req, res) => {
    res.status(200).json({ message: "Ok", clients: ["uno","dos"]  });
})

app.get("/not_found", (req, res) => {
    res.status(404).json({ message: "Error not found" });
})

app.get("/administradores", (req, res) => {
    res.status(404).json({ message: "OK", administradores:[
        {
            "nombre": "Juan",
            "apellido": "Quintana",
            "edad": 25
        },
        {
            "nombre": "Rodrigo",
            "apellido": "Torres",
            "edad": 31
        },
        {
            "nombre": "Juan",
            "apellido": "Suarez",
            "edad": 30
        }
    ],
    total: 5
});
})
module.exports = app;
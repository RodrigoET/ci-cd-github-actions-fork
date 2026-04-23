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
module.exports = app;
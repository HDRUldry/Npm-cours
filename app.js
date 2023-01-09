//const express = require("express");
import express from "express";
const app = express();
const contacts = [
  {
    nom: "alexandre",
    Tel: "09090909909",
  },

  {
    nom: "ROBERT",
    Tel: "09090909909",
  },
];

app.get("/", function (req, res) {
  res.send("BONJOUR LE MONDE");
});

app.get("/api/contacts", function (req, res) {
  res.status(200).json(contacts);
});

export default app;

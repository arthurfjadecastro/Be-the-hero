const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const SessionController = require("./controllers/SessionController");
const IncidentByOngController = require("./controllers/IncidentByOngController");

const routes = express.Router();

//Session routes to get only incidents by ong
routes.post("/sessions", SessionController.create);

//Ong routes
routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.index);

//Incident routes
routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);
routes.get("/incidentsbyong", IncidentByOngController.index);

module.exports = routes;

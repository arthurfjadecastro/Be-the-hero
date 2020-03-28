const express = require("express");

const routes = express.Router();

router.post("/users", (request, response) => {
  const body = request.body;

  return response.json({
    resposta: "resposta"
  });
});

module.exports = routes;

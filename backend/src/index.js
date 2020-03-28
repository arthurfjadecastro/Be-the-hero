const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

//Example to production
// app.use(
//   cors({
//     origin: "https://tribunagamer.com"
//   })
// );

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

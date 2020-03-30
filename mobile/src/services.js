import axios from "axios";
import IndexRouter from "./IndexRouter/indexRouter";
import React, { useState } from "react";

const api = axios.create({
  baseURL: "http://192.168.1.67:3333"
});

//Incidents
const getIncidents = page => {
  console.log("page do get");
  console.log(page);
  return api.get(IndexRouter.incident, {
    params: { page }
  });
};

export default {
  getIncidents
};

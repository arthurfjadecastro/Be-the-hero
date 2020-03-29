import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import { Logon } from "./Home/Logon";
import { OngRegister } from "./Home/Register";
import { Incident } from "./Incidents";
import { IncidentRegister } from "./Incidents/Register";

//Utils
import IndexRouter from "./IndexRouter/indexRouter";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={IndexRouter.logon} exact component={Logon} />
        <Route path={IndexRouter.newOng} component={OngRegister} />
        <Route path={IndexRouter.newIncident} component={IncidentRegister} />
        <Route path={IndexRouter.incident} component={Incident} />
      </Switch>
    </BrowserRouter>
  );
}

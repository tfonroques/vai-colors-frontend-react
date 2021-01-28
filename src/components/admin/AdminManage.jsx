import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NavTab } from "react-router-tabs";
import "../../styles/AdminManage.css";

import PaintingsList from "./paintings/PaintingsList";
import About from "./about/About";

function AdminManage({ match }) {
  return (
    <div className="content px-5">
      <div className="tabs d-flex justify-content-center align-items-center mb-5"></div>
      <ul className="nav nav-tabs">
        <li className="tab nav-item">
          <NavTab className="tab-content nav-link active" to="/admin/paintings">
            Paintings
          </NavTab>
        </li>
        <li className="tab nav-item">
          <NavTab className="tab-content nav-link" to="/admin/about">
            About
          </NavTab>
        </li>
      </ul>
      <div>
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={() => <Redirect replace to={`${match.path}/paintings`} />}
          />
          <Route path={`${match.path}/paintings`} component={PaintingsList} />
          <Route path={`${match.path}/about`} component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default AdminManage;

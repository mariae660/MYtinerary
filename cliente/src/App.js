import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Index from "./components/Index";
import itinerary from "./components/itinerary";
import Login from "./components/Login";
import CreateAcc from "./components/CreateAcc";
import Cities from "./components/Cities";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container-fluid p-0">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createAcc" component={CreateAcc} />
            <Route exact path="/itinerary/:cityid" component={itinerary} />
            <Route exact path="/cities" component={Cities} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

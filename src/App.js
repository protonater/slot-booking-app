import React from "react";
// css styling
import "../public/css/main.css";
import "../public/css/bookingcard.css";
import "../public/css/search.css";
// React Pges
import Home from "./components/Pages/Home";
import Navigator from "./components/common/Navigator";
import Booking from "./components/Pages/BookingPage/Booking";
// React imports
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navigator />
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/booking" exact component={Booking} />
      </Switch>
    </div>
  );
}

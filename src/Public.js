import React from "react";
import trello from "./images/Trello.gif";
import Footer from "./components/Footer";

import { SignIn } from "./App";

function Public() {
  return (
    <div>
      <div className="App-sign-in">
        <div className="App-sign-in-info">
          <h2>Trello</h2>
          <p>Productivity App for productive people.</p>
        </div>
        <div className="App-sign-in-button">
          <img src={trello} alt="" />
          <SignIn />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Public;

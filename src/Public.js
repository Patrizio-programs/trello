import React from "react";
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
          <img src="https://rawcdn.githack.com/Patrizio-programs/trello/7665f543bdd3db41535d8c2ba971f0ccc92f09a8/src/images/Trello.gif" alt="" />
          <SignIn />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Public;

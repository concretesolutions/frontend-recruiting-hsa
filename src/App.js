import React from "react";
import Home from "./views/Home";
import { configureAxios } from "./webservices";

configureAxios();

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

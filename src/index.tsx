import * as React from "react";
import { render } from "react-dom";
import Chart from "./components/chart";
import { Paper } from "@material-ui/core";
import "./styles.scss";
import "./chart-styles.scss";
import { Typography } from "@material-ui/core";
import GlobalStateProvider from "./stateManagement/Contexts/GlobalStateProvider.js"

function App() {
  return (
      <GlobalStateProvider>
        <div
          style={{
           
            scrollbarWidth: "thin",
            borderRadius: 32
          }}
        >
         
          <Chart />
        </div>
      </GlobalStateProvider>
    
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

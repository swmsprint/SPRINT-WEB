import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import Header from "./Header";
import Landing_Page from "./pages/LandingPage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

function App() {
  const anchors = ["LandingPage", "Page1", "Page2", "Page3", "Page4"];
  const [page, setPage] = useState("LandingPage");
  return (
    <div className="App">
      <Header page={page} />
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#8a3d39", "#5050d4", "#FFAC30", "#DBCFFF", "#2AC1BC"]}
        onLeave={(origin, destination, direction) => {
          setPage(destination.anchor);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <Landing_Page />
              <Page1 page={page} />
              <Page2 page={page} />
              <Page3 page={page} />
              <Page4 page={page} />
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;

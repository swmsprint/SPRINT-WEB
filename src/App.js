import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import ReactGA from "react-ga";

import Header from "./Header";
import LandingPage from "./pages/LandingPage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Modal from "./Modal";
import Footer from "./Footer";

function App() {
  const anchors = ["LandingPage", "Page1", "Page2", "Page3", "Page4", "Footer"];
  const [page, setPage] = useState("LandingPage");
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
    ReactGA.event({
      category: "Button",
      action: "Open Modal",
    });
  };
  const closeModal = () => {
    setShowModal(false);
    ReactGA.event({
      category: "Button",
      action: "Close Modal",
    });
  };

  return (
    <div className="App">
      <Header page={page} openModal={openModal} />
      {showModal ? <Modal closeModal={closeModal} /> : null}
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={[
          "#8a3d39",
          "#5050d4",
          "#FFAC30",
          "#DBCFFF",
          "#2AC1BC",
          "#2F2F2F",
        ]}
        onLeave={(origin, destination, direction) => {
          setPage(destination.anchor);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <LandingPage openModal={openModal} />
              <Page1 page={page} />
              <Page2 page={page} />
              <Page3 page={page} />
              <Page4 page={page} />
              <Footer />
            </div>
          );
        }}
      />
      <Footer />
    </div>
  );
}

export default App;

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
        navigationTooltips={[
          "",
          "끝까지 최선을",
          "하나하나 체계적으로",
          "뒤쳐지지 않도록",
          "매일매일 꾸준하게",
          "",
        ]}
        sectionsColor={[
          "#6c7af7",
          "#FA7531",
          "#F3F5FC",
          "#5563DE",
          "#FA7531",
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

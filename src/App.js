import React from "react";
import Playerlist from "./Playerlist";
import Container from "react-bootstrap/Container";

// main component

export const App = () => {
  return (
    <Container className="mt-3">
      {" "}
      <Playerlist />;{" "}
    </Container>
  );
};
export default App;

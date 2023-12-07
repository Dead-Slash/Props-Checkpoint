import React from "react";
import Player from "./Player";
import players from "./players";
import Row from "react-bootstrap/Row";

const Playerlist = () => {
  return (
    <Row>
      {players.map((element) => (
        <Player user={element} key={element.id}></Player>
      ))}
    </Row>
  );
};

export default Playerlist;

// modules
import React, { useState, useEffect } from 'react';

// css
import './GameDetails.css';

const GameDetails = ({ elem }) => {
  return(
    <div className="GameDetails">
      <div className="ContainerCardGame">
        <img className="GameDetailsImg" src={elem.image_game} />
        <div className="ContainerInfoGame">
          <p className="ElemNameGame">{elem.game_name}</p>
          <p>{elem.date_release}</p>
          <p>{elem.developer_name}</p>
        </div>
      </div>
    </div>
  )
}

export default GameDetails;
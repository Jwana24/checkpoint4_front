// modules
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

// components

// css
import './Game.css';
import FilterGame from '../FilterGame/FilterGame';

const Game = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    swipeToSlide: false,
    customPaging: (pagi, i) => {
      const style = {
        width: 13,
        height: 13,
        display: 'inline-block',
        backgroundColor: 'white',
        borderRadius: '50%',
      };
      return <a className="slick-dot" style={style} />;
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          // variableWidth: false,
        }
      },
    ],
  };

  return(
    <div className="Game">
      <h1>Jeux</h1>
      <FilterGame />
      <Slider />
    </div>
  )
}

export default Game;
// modules
import React, { useState, useEffect } from 'react';

// css
import './GameDetails.scss';

const GameDetails = ({ elem }) => {
  const [fav, setFav] = useState();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if(favorites.indexOf(elem.game_id) == -1){
      setFav(false);
    }
    else if(favorites.indexOf(elem.game_id) !== -1){
      setFav(true);
    }
  }, []);

  const handleClickFav = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if(favorites.indexOf(elem.game_id) == -1){
      favorites.push({
        id: elem.game_id,
        name: elem.game_name,
        img: elem.image_game,
        dev: elem.developer_name,
        cat: elem.category_name,
        date: elem.date_release
      });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setFav(true);
    }
    else if(favorites.indexOf(elem.game_id) !== -1){
      favorites.splice(favorites.indexOf(elem.game_id), 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setFav(false);
    }
  }

  return(
    <div className="GameDetails">
      <div className="ContainerCardGame">
        {fav
          ?<img
            className="IconFav full"
            src={require('../../../Icons/fullHeart.png')}
            alt="Icône de favoris"
            onClick={handleClickFav}
          />
        
          :<img
            className="IconFav full"
            src={require('../../../Icons/emptyHeart.png')}
            alt="Icône de favoris"
            onClick={handleClickFav}
          />
        }
        <img className="GameDetailsImg" src={elem.image_game} />
        <div className="ContainerInfoGame">
          <p className="ElemNameGame">{elem.game_name}</p>
          <p>{elem.date_release}</p>
          {/* <p>{elem.developer_name}</p> */}
        </div>
      </div>
    </div>
  )
}

export default GameDetails;
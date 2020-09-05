// modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// components
import GameDetails from './GameDetails/GameDetails';

// css
import './FilterGame.scss';

const FilterGame = () => {
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [game, setGame] = useState([]); // all games in the database
  const [category, setCategory] = useState([]); // all categories in the database
  const [developer, setDeveloper] = useState([]); // all developers in the database
  const [selectValueCat, setSelectValueCat] = useState({
    gameCategory: null
  });
  const [selectValueDev, setSelectValueDev] = useState({
    gameDeveloper: null
  });

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if(search !== ''){
      setSelectValueCat({ gameCategory: null });
      setSelectValueDev({ gameDeveloper: null });
    }
  };

  const handleChangeCat = (e) => {
    e.preventDefault();
    setSelectValueCat({
      ...selectValueCat,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeDev = (e) => {
    e.preventDefault();
    setSelectValueDev({
      ...selectValueDev,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() =>{
    axios.get('http://localhost:5000/api/games')
    .then(res => setGame(res.data))
    .catch(err => console.log(err));

    axios.get('http://localhost:5000/api/categories')
    .then(res => setCategory(res.data))
    .catch(err => console.log(err));

    axios.get('http://localhost:5000/api/developers')
    .then(res => setDeveloper(res.data))
    .catch(err => console.log(err));
  }, []);
  
  const handleClickSearch = () => {
    const existCategory = selectValueCat.gameCategory ? `&category=${selectValueCat.gameCategory}` : '';
    const existDeveloper = selectValueDev.gameDeveloper ? `&developer=${selectValueDev.gameDeveloper}` : '';

    axios.get(`http://localhost:5000/api/games?search=${search}${existCategory}${existDeveloper}`)
    .then(res => res.data)
    .then(data => setResultSearch(data))
    .catch(err => console.log(err));
  };

  return(
    <div className="FilterGame">
      <h1>Liste des jeux</h1>
      <div className="ContainerFiltersAndSearch">
        <div className="ContainerSearchBar">
          <p>Rechercher un jeu</p>
          <input
            id="search"
            name="search"
            type="text"
            value={search}
            onChange={handleChangeSearch}
          />
        </div>

        <div className="ContainerCatDevFilter">
          <div className="ContainerCategoryFilter">
            <p>Filtrer par genre</p>
            <div className="select-style">
              <select
                id="gameCategory"
                name="gameCategory"
                onChange={handleChangeCat}
              >
                {category.map(category => {
                  return <option
                      key={category.idcategory}
                      name={category.name}
                      value={category.name}
                    >
                      {category.name}
                  </option>
                })}
              </select>
            </div>
          </div>

          <div className="ContainerDeveloperFilter">
            <p>Filtrer par développeurs</p>
            <div className="select-style">
              <select
                id="gameDeveloper"
                name="gameDeveloper"
                onChange={handleChangeDev}
              >
                {developer.map(developer =>{
                  return <option
                    key={developer.iddeveloper}
                    name={developer.name}
                    value={developer.name}
                  >
                    {developer.name}
                  </option>
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="ContainerBtnFilter">
          <button className="ConnectionBtn" type="submit" onClick={handleClickSearch}>Rechercher</button>
        </div>
      </div>
      
      <div className="ContainerLineFilter">
        <hr className="LineFilter" />
      </div>
      
      <div className="ContainerAllGamesFilter">
        {resultSearch.length > 0
          ?resultSearch.map(elem => {
            return <GameDetails elem={elem} />
          })
          :game.map(elem => {
            return <GameDetails elem={elem} />
          })}
      </div>
    </div>
  )
}

export default FilterGame;
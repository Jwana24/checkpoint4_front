// modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// components


// css
import './Profile.scss';

const Profile = () => {
  const [verify, setVerify] = useState([]);
  const [fav, setFav] = useState();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFav(favorites);
  }, []);

  useEffect(() => {
    axios.post('http://localhost:5000/api/users/profile', verify, {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('user')
      },
    })
    .then(res => setVerify(res.data.authData.user[0]))
  }, []);

  // console.log(fav && fav.map(games => games.name));

  return(
    <div className="Profile">
      <img className="ImgBannerProfile" src={verify.img_banner} />
      <div className="ContainerMainProfile">

        <div className="ContainerImgName">
          <div className="ContainerImgProfile">
            <img className="ImgProfile" src={verify.img_profile} />
          </div>
          <div className="ContainerNameEdit">
            <p className="NicknameProfile">{verify && verify.firstname}</p>
            <img className="IconProfile Pen" src={require('../../../Icons/editPen.png')} />
          </div>
        </div>

        <div className="ContainerGameSelection">
          <div className="ContainerImgHeartContent">
            <img className="IconProfile" src={require('../../../Icons/fullHeart.png')} />
            <h3>Ma sélection de jeux :</h3>
          </div>
          <div>
            <hr className="LineFilter" />
          </div>
        </div>
      </div>
      <div className="ContainerAllFavGames">
        <div className="ContainerFavGames">
          {
            fav
            ?fav.map(favGame => {
              return <div className="ContainerDetailsFav">
                <div>
                  <img className="GameDetailsImg" src={favGame.img} />
                  <div className="ContainerInfoGame">
                    <p className="ElemNameGame">{favGame.name}</p>
                    <p>{favGame.date}</p>
                  </div>
                </div>
              </div>
            })
            :<h2>Votre sélection est vide</h2>
          }
        </div>
      </div>
    </div>
  )
}

export default Profile;
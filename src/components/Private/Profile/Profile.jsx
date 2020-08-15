// modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// components


// css
import './Profile.scss';

const Profile = () => {
  const [verify, setVerify] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:5000/api/users/profile', verify, {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('user')
      },
    })
    .then(res => setVerify(res.data.authData.user[0]))
  }, []);

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
      <h2>Votre sélection est vide</h2>
    </div>
  )
}

export default Profile;
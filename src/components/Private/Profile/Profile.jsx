import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <p>{verify && verify.firstname}</p>
    </div>
  )
}

export default Profile;
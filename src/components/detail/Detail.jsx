import React from 'react'
import './detail.css';
import { auth } from '../../lib/firebase';

function Detail() {

  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="profile-img" />
        <h2>Iqra Rasheed</h2>
        <p>Just Keep and Trust Allah's Plan. You will make it one day.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="icon" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="icon" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="icon" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className='photoDetail'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s" alt="img" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="icon" className='icon'/>
            </div>
            <div className="photoItem">
              <div className='photoDetail'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s" alt="img" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="icon" className='icon'/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="icon" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail
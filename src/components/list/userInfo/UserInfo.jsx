import React from 'react'
import './userInfo.css';

function UserInfo() {
  return (
    <div className='userInfo'>
      <div className='user'>
        <img src='./avatar.png' alt='' />
        <h2>Iqra Rasheed</h2>
      </div>
      <div className='icons'>
        <img src='./more.png' alt='icon' />
        <img src='./video.png' alt='icon' />
        <img src='./edit.png' alt='icon' />
      </div>
    </div>
  )
}

export default UserInfo
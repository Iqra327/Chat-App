import React, { useState } from 'react'
import './chatList.css';
import AddUser from './addUser/AddUser';

function ChatList() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatList'>
      <div className='search'>
        <div className="searchBar">
          <img src='./search.png' alt='icon' />
          <input type='text' placeholder='Search'/>
        </div>
        <img src={addMode ? './minus.png' : './plus.png'} alt='icon' className='add' onClick={() => setAddMode((prev) => !prev)}/>
      </div>
      <div className='item'>
        <img src='./avatar.png' alt='' />
        <div className="texts">
          <span>Iqra Rasheed</span>
          <p>Hello, don't worry</p>
        </div>
      </div>
      <div className='item'>
        <img src='./avatar.png' alt='' />
        <div className="texts">
          <span>Iqra Rasheed</span>
          <p>Hello, don't worry</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  )
}

export default ChatList
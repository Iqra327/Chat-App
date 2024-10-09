import React, { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

function Chat() {

  const[open, setOpen] = useState(false);
  const[text, setText] = useState('');

  const handleEmoji = (e) => {
    setText(prev => prev + e.emoji);
    setOpen(false);
  }

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: 'smooth'});
  },[])


  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img 
            src='./avatar.png' 
            alt='user-img' 
          />
          <div className='texts'>
            <span>Iqra Rasheed</span>
            <p>Don't worry. You'll be able to do it one day. Just Keep Going</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phone-icon" />
          <img src="./video.png" alt="video-icon" />
          <img src="./info.png" alt="info-icon" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="profile-img" />
          <div className="texts">
            <p>Just keep going...</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s" alt="" />
            <p>Just keep going...</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="profile-img" />
          <div className="texts">
            <p>Just keep going...</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Just keep going...</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="profile-img" />
          <div className="texts">
            <p>Just keep going...</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
     
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="icon" />
          <img src="./camera.png" alt="icon" />
          <img src="./mic.png" alt="icon" />
        </div>
          <input 
            type="text" 
            placeholder='Type a message...'
            onChange={e => setText(e.target.value)} 
            value={text}
          />
          <div className="emoji">
            <img src="./emoji.png" alt="icon" onClick={() => setOpen((prev) => !prev)}/>
            <div className='picker'>
              <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat
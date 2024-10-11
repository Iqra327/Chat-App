import React from 'react'
import './detail.css';
import { auth, db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

function Detail() {

  const {chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock} = useChatStore();

  const {currentUser}  =useUserStore();
  
  const handleBlock = async () => {
    if(!user) return ;

    const userDocRef = doc(db, 'users', currentUser.id)

    try {
      await updateDoc(userDocRef,{
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
      });
      changeBlock()
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () => {
    auth.signOut();
    resetChat();
  }

  return (
    <div className='detail'>
      <div className="user">
        <img src={user?.avatar || './avatar.png'} alt="profile-img" />
        <h2>{user?.username}</h2>
        <p>Just Keep Going and Trust Allah's Plan. You will make it one day.</p>
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
          {/* <div className="photos">
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
          </div> */}
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="icon" />
          </div>
        </div>
        <button onClick={handleBlock}>
          { isCurrentUserBlocked 
            ? "You are Blocked!" 
            : isReceiverBlocked
            ? "User blocked" 
            : "Block User"
          }
          </button>
        <button className='logout' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
 
export default Detail
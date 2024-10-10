import React, { useState } from 'react';
import './addUser.css';
import { toast } from 'react-toastify';
import { collection, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';

function AddUser() {
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('username'); 
    
    try {
      const userRef = collection(db, 'users');
      const q = query(userRef, where('username', '===', username));

      const querySnapShot = await getDocs(q);

      if(!querySnapShot.empty){
        setUser(querySnapShot.docs[0].data());
      }
    } catch (error) {
      console.log(error) 
    }
  }

  const addUser = async() => {
    const chatRef = collection(db, 'chats');
    const userChatsRef = collection(db, 'userchats');

    try {
      const newChatRef = doc(chatRef)

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

    
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder='Username' name='username' />
        <button>Search</button>
      </form>
      {
      user && <div className="user">
        <div className="detail">
          <img src={user.avatar || "./avatar.png"} alt="" />
          <span>{user.username}</span>
        </div>
        <button onClick={handleAdd}>Add User</button>
      </div>
      }
    </div>
  )
}

export default AddUser
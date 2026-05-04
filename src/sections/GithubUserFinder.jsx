import React, { useEffect, useState } from 'react'

const GithubUserFinder = () => {

    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState(null)

    const fetchUser = async (e) =>{
        e.preventDefault();

        setUserData(null)

        try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
      console.log(data)
    } catch (err) {
    alert(err);
    }
    }
    
     
  return (
    <div>
        <h1>Github User Finder</h1>

        <form onSubmit={fetchUser}>
            <input 
            placeholder='Enter a user name'
            type='text'
            onChange={(e)=>setUserName(e.target.value)} 
        />

        <button type='submit'>Search User</button>
        </form>

        {userData && <div>
            <img src= {userData.avatar_url}
                    alt = {userData.login}
             />
             <h2> {userData.name} </h2>
             <p> {userData.bio} </p>

             <div>
                <p><strong>{userData.public_repos}</strong> public repositories</p>
                <p><strong>{userData.followers}</strong> followers</p>
                <p><strong>{userData.following}</strong> following</p>
             </div>
             <p>Location {userData.location} </p>
        </div>}
    </div>
  )
}

export default GithubUserFinder
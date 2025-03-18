// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  // State to store the list of users
  const [listOfUsers, setListOfUsers] = useState([]);

  // Fetching users data using useEffect and axios
  useEffect(() => {
    // JSONPlaceholder API URL for users
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data); // Save the fetched data in state
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
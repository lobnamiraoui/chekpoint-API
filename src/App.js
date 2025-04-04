import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css"; // Import du fichier CSS

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Liste des Utilisateurs</h1>
      <ul className="user-list">
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-card">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

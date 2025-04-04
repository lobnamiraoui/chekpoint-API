import React, { useState } from "react";
import UserList from "./UserList";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Application des Utilisateurs</h1>
      <UserList />
    </div>
  );
}

export default App;
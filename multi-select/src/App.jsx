import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    handleSuggestions();
  }, [searchTerm]);

  const inputRef = useRef();

  const handleSuggestions = () => {
    fetch(`https://dummyjson.com/users/search?q=${searchTerm}`).then(
      async (res) => {
        const data = await res.json();
        console.log(data?.users);
        setShowSuggestions(true);
        setSuggestions(data?.users);
        if (searchTerm?.length == 0) setSuggestions([]);
      }
    );
  };

  const handleAddSuggestion = (user) => {
    setSelectedUsers((prev) => [...prev, user]);
    inputRef.current.focus();
  };

  const handleRemoveSelected = (user) => {
    setSelectedUsers((prev) => prev.filter((prev) => prev.id != user.id));
  };

  const handleBlur = () => {
    setShowSuggestions(false);
  };

  return (
    <div className="container">
      <div className="search-input-box">
        {selectedUsers.map((user) => {
          return (
            <div
              className="chip"
              key={user.id}
              user={user}
              onClick={() => handleRemoveSelected(user)}
            >
              <img src={user.image} />
              {user.firstName} &times;
            </div>
          );
        })}
        <div className="search-input">
          <input
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {showSuggestions && (
            <div className="suggestion" onBlur={handleBlur}>
              {suggestions.map((user, index) => {
                return (
                  <li
                    className="sug-user"
                    onClick={() => handleAddSuggestion(user)}
                  >
                    <img src={user.image} />
                    <span>{user.firstName}</span>
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

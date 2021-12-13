import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id: uuidv4(), name: uName, age: uAge}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

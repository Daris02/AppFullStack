import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Add from "./pages/Add/Add";
import { getUsers } from "./api/api.user";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsersLoad() {
      const allUsers = await getUsers();
      setUsers(allUsers);
    }

    getUsersLoad();
    
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List data={users} />} />
          <Route path="/add" element={<Add />} />
        </Routes>
    </>
  );
}

export default App;

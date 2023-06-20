import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Form from "./pages/Form/Form";

const baseURL = 'http://localhost:5000';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/users`)
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List data={users} />} />
          <Route path="/form" element={<Form />} />
        </Routes>
    </>
  );
}

export default App;

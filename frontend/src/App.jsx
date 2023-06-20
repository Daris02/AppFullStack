import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Form from "./pages/Form/Form";

const baseURL = 'http://localhost:5000';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/users`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List data={data} />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </header>y
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Form from "./pages/Form/Form";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </header>
    </>
  );
}

export default App;

import { Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Add from "./pages/Add/Add";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
        </Routes>
    </>
  );
}

export default App;

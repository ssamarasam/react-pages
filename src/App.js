import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Table from "./components/Table";
import AxiosFetch from "./components/AxiosFetch";

function App() {
  const tableObject = {
    name: "John Smith",
    age: 33,
  };
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/table" className="table">
          Table Items
        </Link>
        <Link to="/axiosfetch" className="axios-fetch">
          Axios Fetch
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/table" element={<Table data={tableObject} />}></Route>
        <Route path="/axiosfetch" element={<AxiosFetch />}></Route>
      </Routes>
    </div>
  );
}

export default App;

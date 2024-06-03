import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage"

function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
    </>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About";
import NoteState from "./context/notes/NoteState";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import "./App.css"
import Newpage from "./newpage.jsx";
import Addnote from './Addnote';
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Newpage/>} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Addnote" element={<Addnote/>} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App

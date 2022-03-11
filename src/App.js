import React from 'react'
import './App.css';
import HomePage from './containers/HomePage.js'
import ActorPage from './components/ActorPage.js'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
     <NavBar/>
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/actor" element={<ActorPage/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;

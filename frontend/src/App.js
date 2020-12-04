import React from "react";
import Routes from "./routes";

import Header from './components/Header';
// import Main from './pages/main';
import NewBook from './components/NewBook';

import './styles.css';

  function App() {

    return (
    <div className = "App" >
        <Header />
        <NewBook />
        <Routes />
    </div>
    );      
}

export default App;
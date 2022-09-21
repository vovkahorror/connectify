import React from "react";
import "./normalize.css";
import "./App.css";
import {Header} from "./components/Header";
import {Nav} from "./components/Nav";
import {Profile} from "./components/Profile";

function App() {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <Nav/>
      <Profile/>
    </div>
  );
};

export default App;

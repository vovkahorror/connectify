import React from "react";
import "./normalize.css";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Messages/Dialogs";

function App() {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <Nav/>
      <div className={'app-wrapper__content'}>
        <Dialogs/>
      </div>
      {/*<Profile/>*/}
    </div>
  );
};

export default App;

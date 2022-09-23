import React from "react";
import "./normalize.css";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Messages/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Nav/>
        <div className={'app-wrapper__content'}>
          <Route path={'/profile'} component={Profile}/>
          <Route path={'/dialogs'} component={Dialogs}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

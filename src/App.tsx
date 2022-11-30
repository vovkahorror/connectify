import React from "react";
import "./normalize.css";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    const ProfileRender = () => <Profile/>;
    const DialogsRender = () => <DialogsContainer/>;
    const UsersRender = () => <UsersContainer/>;

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper__content'}>
                <Route path={'/profile'} render={ProfileRender}/>
                <Route path={'/dialogs'} render={DialogsRender}/>
                <Route path={'/news'} render={News}/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/users'} render={UsersRender}/>
                <Route path={'/settings'} render={Settings}/>
            </div>
        </div>
    );
};

export default App;

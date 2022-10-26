import React from "react";
import "./normalize.css";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, StateType} from "./redux/store";
import {EmptyObject, Store} from "redux";

type AppPropsType = {
    state: StateType;
    dispatch: (action: ActionsTypes) => void;
    store: Store<EmptyObject & { profilePage: never; dialogsPage: never; sidebar: any; }, ActionsTypes>;
}

function App(props: AppPropsType) {
    const PostsRender = () => {
        return (
            <Profile
                profileState={props.state.profilePage}
                dispatch={props.dispatch}
            />
        );
    };
    const DialogsRender = () => {
        return <Dialogs store={props.store}/>;
    };

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper__content'}>
                <Route path={'/profile'} render={PostsRender}/>
                <Route path={'/dialogs'} render={DialogsRender}/>
                <Route path={'/news'} render={News}/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/settings'} render={Settings}/>
            </div>
        </div>
    );
};

export default App;

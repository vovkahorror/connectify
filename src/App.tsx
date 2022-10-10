import React from "react";
import "./normalize.css";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsDataType, MessagesDataType} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostsDataType} from "./components/Profile/Posts/Posts";
import {StateType, updateNewPostText} from "./redux/state";

export type ProfilePageType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>;
    messagesData: Array<MessagesDataType>;
}
type AppPropsType = {
    state: StateType;
    addPost: () => void;
    updateNewPostText: (newText: string) => void;
}

function App(props: AppPropsType) {
    const PostsRender = () => {
        return (
            <Profile
                profileState={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        );
    };
    const DialogsRender = () => {
        return <Dialogs dialogsState={props.state.dialogsPage}/>;
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

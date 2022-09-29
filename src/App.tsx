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

export type ProfilePageType = {
  postsData: Array<PostsDataType>;
}
export type DialogsPageType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
}
type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
}
type AppPropsType = {
  state: StateType;
}

function App(props: AppPropsType) {
  const PostsRender = () => {
    return <Profile profileState={props.state.profilePage}/>
  }
  const DialogsRender = () => {
    return <Dialogs dialogsState={props.state.dialogsPage}/>
  }

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

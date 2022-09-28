import React from "react";
import "./normalize.css";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsDataType, MessagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostsDataType} from "./components/Profile/Posts/Posts";

type AppPropsType = {
  postsData: Array<PostsDataType>;
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
}

function App(props: AppPropsType) {
  const PostsRender = () => {
    return <Profile postsData={props.postsData}/>
  }
  const DialogsRender = () => {
    return <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>
  }

  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper__content'}>
          <Route path={'/profile'} render={PostsRender}/>
          <Route path={'/dialogs'} render={DialogsRender}/>
          <Route path={'/news'} component={News}/>
          <Route path={'/music'} component={Music}/>
          <Route path={'/settings'} component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

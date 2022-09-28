import React from "react";
import "./normalize.css";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

const postsData = [
  {id: 1, message: 'I\'m glad to see you here', likes: 5},
  {id: 2, message: 'Hello! How are you?', likes: 4},
  {id: 3, message: 'It\'s my firs post', likes: 3},
];

const dialogsData = [
  {id: 1, name: 'Nastya'},
  {id: 2, name: 'Vova'},
  {id: 3, name: 'Pavlik'},
  {id: 4, name: 'Natasha'},
  {id: 5, name: 'Sasha'},
  {id: 6, name: 'Nila'},
];

const messagesData = [
  {id: 1, message: 'I\'m OK'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Hi!'},
  {id: 4, message: 'It is my family'},
];

function App() {
  const PostsRender = () => {
    return <Profile postsData={postsData}/>
  }
  const DialogsRender = () => {
    return <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>
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

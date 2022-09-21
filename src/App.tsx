import React from "react";
import "./App.css";

function App() {
  return (
    <div className={'app-wrapper'}>
      <header className={'header'}>
        <img className={'header__img'}
             src="https://oir.mobi/uploads/posts/2021-05/1620644854_26-oir_mobi-p-malenkii-morskoi-kotik-zhivotnie-krasivo-f-27.jpg"
             alt=""/>
      </header>
      <nav className={'nav'}>
        <ul>
          <li><a href="">Profile</a></li>
          <li><a href="">Messages</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Music</a></li>
          <li><a href="">Settings</a></li>
        </ul>
      </nav>
      <main className={'content'}>
        <div>
          <img src="https://mobimg.b-cdn.net/v3/fetch/61/61f20e391ef31aea89544874388ce749.jpeg?w=1000&r=0.5625"
               alt=""/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

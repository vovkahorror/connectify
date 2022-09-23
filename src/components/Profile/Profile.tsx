import React from "react";
import styles from './Profile.module.css'
import {Posts} from "./Posts/Posts";

export const Profile = () => {
  return (
    <main>
      <div>
        <img src="https://mobimg.b-cdn.net/v3/fetch/61/61f20e391ef31aea89544874388ce749.jpeg?w=1000&r=0.5625"
             alt=""/>
      </div>
      <div>
        ava + description
      </div>
      <Posts/>
    </main>
  )
}
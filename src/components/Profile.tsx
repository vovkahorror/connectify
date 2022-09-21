import React from "react";
import styles from './Profile.module.css'

export const Profile = () => {
  return (
    <main className={styles.content}>
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
  )
}
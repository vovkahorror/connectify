import React from "react";
import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://mobimg.b-cdn.net/v3/fetch/61/61f20e391ef31aea89544874388ce749.jpeg?w=1000&r=0.5625"
             alt=""/>
      </div>
      <div className={styles.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}
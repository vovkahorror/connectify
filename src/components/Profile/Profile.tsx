import React from "react";
import styles from './Profile.module.css'
import {Posts, PostsDataType} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  postsData: Array<PostsDataType>;
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <main>
      <ProfileInfo/>
      <Posts postsData={props.postsData}/>
    </main>
  )
}
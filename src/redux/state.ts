import {DialogsPageType, ProfilePageType} from "../App";
import {rerenderEntireTree} from "../render";

export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
}

export const state = {
  profilePage: {
    postsData: [
      {id: 1, message: 'I\'m glad to see you here', likes: 5},
      {id: 2, message: 'Hello! How are you?', likes: 4},
      {id: 3, message: 'It\'s my firs post', likes: 3},
    ],
  },
  dialogsPage: {
    dialogsData: [
      {id: 1, name: 'Nastya'},
      {id: 2, name: 'Vova'},
      {id: 3, name: 'Pavlik'},
      {id: 4, name: 'Natasha'},
      {id: 5, name: 'Sasha'},
      {id: 6, name: 'Nila'},
    ],
    messagesData: [
      {id: 1, message: 'I\'m OK'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Hi!'},
      {id: 4, message: 'It is my family'},
    ],
  },
}

export const addPost = (postMessage: string) => {
  const newPost = {
    id: 4,
    message: postMessage,
    likes: 0,
  }

  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
}
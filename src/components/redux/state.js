 let rerenderEntireTree = (state) => {
  console.log("state change");
}

let state = {
  profilePage: {
    posts: [
      { id: 0, message: "Hi, how are you?", likesCount: 12 },
      { id: 1, message: "It's my first post", likesCount: 25 },
    ],
    newPostText: 'Hi Serhii'
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Serhii" },
      { id: 2, name: "Natalia" },
      { id: 3, name: "Damir" },
      { id: 4, name: "Ignat" },
      { id: 5, name: "Anna" },
      { id: 6, name: "Milana" },
    ],
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Hi, I am good!" },
    ],
  },
  sideBar: {},
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}


export default state;

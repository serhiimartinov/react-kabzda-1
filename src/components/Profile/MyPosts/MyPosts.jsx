import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
    
  };
  let onPostChange = () => {
    // props.newPostText()
  };

  return (
    <div>
      <div className={s.myPosts}>
        <h3>My posts</h3>{" "}
      </div>
      <textarea onChange={onPostChange} ref={newPostElement} className={s.myPostTextArea} value={props.newPostText}/>
      <div>
        <button onClick={addPost} className={s.myPostButton}>
          Add post
        </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

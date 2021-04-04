import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" />
        <span className={s.postContent}>{props.message}</span>
      </div>
      <div>
        <span className={s.itemLike}>Like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;

import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPost} from "../../../Redux/posts";

function MyPosts(props) {
  const postsElements =
      props.posts.map((p) => <Post message={p.message} likeCount={p.likeCount} />);

  const newPostElement = React.createRef();

  const addPost = () => {
      debugger;
      const text = newPostElement.current.value;
      props.addPost(text);
  }
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
            <textarea ref={newPostElement}> </textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;

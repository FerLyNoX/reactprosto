import s from './MyPosts.module.css';

import Post from './Post/Post';
import { posts } from '../../../Data/posts';

function MyPosts() {
  const postsElements = posts
    .map((p) => <Post message={p.message} likeCount={p.likeCount} />);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;

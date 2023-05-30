import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 12},
        {id: 3, name: 'Bogdan'},
        {id: 4, name: 'Ilya'}
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
            </div>
        </div>
    )
}

export default MyPosts;
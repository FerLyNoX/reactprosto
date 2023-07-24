import post from "../components/Profile/MyPosts/Post/Post";

export const

  posts = [
  { id: 1, message: 'Hi, how are you?', likeCount: 12 },
  { id: 2, message: 'It\'s my first post', likeCount: 25 },
  { id: 1, message: 'blabla', likeCount: 100 },
  { id: 1, message: 'dada', likeCount: 5 },
];



export const addPost = (postMessage) => {
  debugger;
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  posts.push(newPost);
}
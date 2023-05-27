import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://media.istockphoto.com/id/1253837586/photo/blurred-blue-sky-and-sea-with-bokeh-light.jpg?s=612x612&w=0&k=20&c=nQm3RRAuk-5ue7AXbw6liaCSVZRcA4OQx3AUjPFG9_8='/>
            </div>
            <div>
                ava + description
                {/*<img src='https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg'/>*/}
            </div>
        <MyPosts/>
        </div>
    )
}

export default Profile;
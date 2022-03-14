import "./CreatePost.css";
import {useState} from "react";

const CreatePost = (props) => {
    const [enteredPost, setEnteredPost] = useState("");

    const handleInputChanged = (e) => {
      setEnteredPost(e.target.value);
    };

    const handleCreatePost = () => {
        props.onCreatePost(enteredPost);
        setEnteredPost("");
    };

    return (
        <div className="create-post__container">
            <input className="create-post__input" placeholder="Start typing..." value={enteredPost} onChange={handleInputChanged}/>
            <button className="create-post__button" onClick={handleCreatePost}>Post</button>
        </div>
    );
};

export default CreatePost;
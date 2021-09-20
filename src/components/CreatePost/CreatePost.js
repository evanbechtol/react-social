import "./CreatePost.css";
import {useState} from "react";

const CreatePost = (props) => {
    const [enteredPost, setEnteredPost] = useState("");

    const handleInputChanged = (e) => {
      setEnteredPost(e.target.value);
    };

    const handleCreatePost = () => {
        props.onCreatePost(enteredPost);
    };

    return (
        <div className="create-post__container">
            <input placeholder="Start typing..." value={enteredPost} onChange={handleInputChanged}/>
            <button onClick={handleCreatePost}>Post</button>
        </div>
    );
};

export default CreatePost;
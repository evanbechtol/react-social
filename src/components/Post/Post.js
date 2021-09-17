import "../../assets/css/layout.css";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faThumbsUp,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

const Post = ( { post } ) => {
  return (
    <div className="post__container">
      <div className="row flex-container post__header">
        <div className="post__header-title">
          <div className="post__avatar">
            <FontAwesomeIcon icon={faUserCircle} size="3x"/>
          </div>
          <p className="post__title">{post.title}</p>
        </div>

        <div className="post__actions">
          <button id={`actions-button-post-${post.id}`} aria-label="Actions">
            <FontAwesomeIcon icon={faEllipsisH}/>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="post__content">{post.body}</div>
      </div>

      <div className="row post_reactions">
        <button id={`like-post-${post.id}`} aria-label="Like">
          <FontAwesomeIcon icon={faThumbsUp} size="lg"/>
        </button>
      </div>
    </div>
  );
};

export default Post;

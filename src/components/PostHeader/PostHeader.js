import "./PostHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const PostHeader = ({post}) => {
  return (
    <>
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
    </>
  );
};

export default PostHeader;

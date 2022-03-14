import "./PostHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const PostHeader = ({title, id}) => {
  return (
    <>
      <div className="post__header-title">
        <div className="post__avatar">
          <FontAwesomeIcon icon={faUserCircle} size="3x"/>
        </div>
        <p className="post__title">{title}</p>
      </div>

      <div className="post__actions">
        <button id={`actions-button-post-${id}`} aria-label="Actions">
          <FontAwesomeIcon icon={faEllipsisH}/>
        </button>
      </div>
    </>
  );
};

export default PostHeader;

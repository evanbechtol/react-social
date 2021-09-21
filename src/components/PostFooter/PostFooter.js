import "./PostFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";


const PostFooter = ({post}) => {
  return (
    <button id={`like-post-${post.id}`} aria-label="Like">
      <FontAwesomeIcon icon={faThumbsUp} size="lg"/>
    </button>
  );
};

export default PostFooter;

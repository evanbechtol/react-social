import "./PostFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";


const PostFooter = ({id}) => {
  return (
    <button id={`like-post-${id}`} aria-label="Like">
      <FontAwesomeIcon icon={faThumbsUp} size="lg"/>
    </button>
  );
};

export default PostFooter;

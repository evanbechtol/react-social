import "../../assets/css/layout.css";
import "./Post.css";
import PostHeader from "../PostHeader/PostHeader";
import PostFooter from "../PostFooter/PostFooter";
import { useMemo } from "react";

const Post = ( { title, id, body } ) => useMemo(() => {
  return (
    <div className="post__container">
      <div className="row flex-container post__header">
        <PostHeader title={title} id={id}/>
      </div>

      <div className="row">
        <div className="post__content">{body}</div>
      </div>

      <div className="row post_reactions">
        <PostFooter post={id} />
      </div>
    </div>
  );
}, [title, id, body]);

/*const Post = ( { title, id, body } ) => {
  return (
    <div className="post__container">
      <div className="row flex-container post__header">
        <PostHeader title={title} id={id}/>
      </div>

      <div className="row">
        <div className="post__content">{body}</div>
      </div>

      <div className="row post_reactions">
        <PostFooter post={id} />
      </div>
    </div>
  );
};*/

export default Post;

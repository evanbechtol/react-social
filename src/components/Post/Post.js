import "../../assets/css/layout.css";
import "./Post.css";
import PostHeader from "../PostHeader/PostHeader";
import PostFooter from "../PostFooter/PostFooter";

const Post = ( { post } ) => {
  return (
    <div className="post__container">
      <div className="row flex-container post__header">
        <PostHeader post={post}/>
      </div>

      <div className="row">
        <div className="post__content">{post.body}</div>
      </div>

      <div className="row post_reactions">
        <PostFooter post={post} />
      </div>
    </div>
  );
};

export default Post;

import "../../assets/css/layout.css";
import "./Post.css";

const Post = ({post}) => {
  return (
      <div className="post__container">
          <div className="row flex-container post__header">
              <div className="post__header-title">
                  <div className="post__avatar"/>
                  <p className="post__title">{post.title}</p>
              </div>

              <div className="post__actions">
                  <button id={`actions-button-post-${post.id}`} label="Actions">Actions</button>
              </div>
          </div>

          <div className="row">
              <div className="post__content">{post.body}</div>
          </div>

          <div className="row post_reactions">
              <button id={`like-post-${post.id}`} label="Like">Like</button>
          </div>
      </div>
  );
};

export default Post;
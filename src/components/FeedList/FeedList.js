import "../../assets/css/layout.css";
import "./FeedList.css";
import Post from "../Post/Post";

const FeedList = ({posts}) => {

    return (
      !posts.length
        ? "No posts to display"
        : posts.map(post => {
          return (
            <div key={post.id} className="feed__post">
              <Post title={post.title} id={post.id} body={post.body}/>
            </div>
          )
        })
    );
};

export default FeedList;

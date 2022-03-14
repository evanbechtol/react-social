import "./Feed.css";
import "../../assets/css/layout.css";
import CreatePost from "../../components/CreatePost/CreatePost";
import FeedList from "../../components/FeedList/FeedList";
import { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import { v4 as uuidv4 } from "uuid";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(async () => {
          try {
            const {data} = await httpService.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(data);
            console.log(data);
          } catch ( err ) {
            console.error(err );

          } finally {
            setIsLoading(false);
          }
        }, 2000);
    }, []);

    const handleCreatePost = (e) => {
        const newPost = {id: uuidv4(), userId: 1, title: "Some Title", body: e};
        setPosts(prevState => [newPost, ...prevState]);
    };

    return (
        <>
            <div className="feed__container justify-center align-content-center">
                <CreatePost className="create-post__container" onCreatePost={handleCreatePost}/>
            </div>
            <div className="feed__container justify-center align-content-center">
                {
                    isLoading
                        ? "Loading...."
                        : <FeedList posts={posts}/>
                }
            </div>
        </>
    );
};

export default Feed;

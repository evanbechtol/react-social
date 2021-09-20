import "./Feed.css";
import "../../assets/css/layout.css";
import CreatePost from "../../components/CreatePost/CreatePost";
import FeedList from "../../components/FeedList/FeedList";
import {useEffect, useState} from "react";
import httpService from "../../services/httpService";

const Feed = (props) => {
    const [refreshFeed, setRefreshFeed] = useState(true);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            httpService.get("https://jsonplaceholder.typicode.com/posts")
                .then(response => {
                    setPosts(response.data);
                    console.log(response.data);
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => setIsLoading(false));
        }, 2000);
    }, [refreshFeed]);

    return (
        <>
            <CreatePost/>
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
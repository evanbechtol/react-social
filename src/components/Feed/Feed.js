import "../../assets/css/layout.css";
import "./Feed.css"
import Post from "../Post/Post";
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

    const ListOfPosts = () => {
        return !posts.length
            ? "No posts to display"
            : posts.map(post => {
                return (
                    <div key={post.id} className="feed__post">
                        <Post post={post}/>
                    </div>
                )
            });
    };

    return (
        <div className="feed__container justify-center align-content-center">
            {
                isLoading
                    ? "Loading...."
                    : <ListOfPosts/>
            }
        </div>
    );
};

export default Feed;
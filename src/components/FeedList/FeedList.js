import "../../assets/css/layout.css";
import "./FeedList.css"
import Post from "../Post/Post";
import {useEffect, useState} from "react";
import httpService from "../../services/httpService";

const FeedList = ({posts}) => {

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

    return <ListOfPosts/>;
};

export default FeedList;
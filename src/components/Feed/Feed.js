import "../../assets/css/layout.css";
import "./Feed.css";
import Post from "../Post/Post";
import { useEffect, useState } from "react";
import httpService from "../../services/httpService";

const Feed = ( props ) => {
  const [ refreshFeed, setRefreshFeed ] = useState( true );
  const [ posts, setPosts ] = useState( [] );

  useEffect( () => {
    httpService.get( "https://jsonplaceholder.typicode.com/posts" )
      .then( response => {
        setPosts( response.data );
      } )
      .catch( err => {
        console.error( err );
      } );
  }, [ refreshFeed ] );

  return (
    <div className="feed__container justify-center align-content-center">
      {
        posts.map( post => {
          return (
            <div key={post.id} className="feed__post">
              <Post post={post}/>
            </div>
          );
        } )
      }
    </div>
  );
};

export default Feed;

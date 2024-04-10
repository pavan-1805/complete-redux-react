import axios from "axios";
import "./Posts.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToMyPosts,
  fetchData,
  fetchFailure,
  fetchSuccessful,
} from "../../store/actions/actions";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector(
    (result) => result.dataFetchingReducer
  );

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(fetchSuccessful(response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure("ERROR IN FETCHING DATA"));
      });
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const addToMyPostsClickHandler = (post) => {
    dispatch(addToMyPosts(post));
  };

  return (
    <div className="main-container">
      <button>
        <Link to="/my-posts">My Posts</Link>
      </button>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="all-cards">
          {posts.map((post, index) => {
            return (
              <div className="card" key={index}>
                <h2>{post.id}</h2>
                <div className="container">
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
                <button
                  className="btn-class"
                  onClick={() => addToMyPostsClickHandler(post)}
                >
                  Add to My Posts
                </button>
              </div>
            );
          })}
        </div>
      )}
      {error ? error : null}
    </div>
  );
};
export default Posts;

import React, { useState } from "react";
import "./AddPost.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost, removePost, updatePost } from "../../store/actions/actions";

const AddPost = () => {
  const { posts } = useSelector((result) => result.dataFetchingReducer);
  const dispatch = useDispatch();
  const { myPosts, isLoading } = useSelector(
    (result) => result.addRemovePostsReducer
  );
  console.log(myPosts);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [ediId, setEditId] = useState("");
  const [ediTitle, setEDITTitle] = useState("");
  const [editBody, setEDITBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        id: Math.trunc(Math.random() * 1000),
        title: title,
        body: body
      })
    );
    console.log("POSTS: ", posts);
  };
  const editSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePost({
        id: ediId,
        title: ediTitle,
        body: editBody
      })
    );
  };
  const editHlickHandler = (post) => {
    setIsEdit(true);
    setEditId(post.id);
    setEDITBody(post.body);
    setEDITTitle(post.title);
  };
  const deleteHandler = (post) => {
    dispatch(removePost(post));
  };

  return (
    <>
      <div className="main-div">
        <div className="left-div">
          <form onSubmit={submitHandler}>
            <label>Enter Title:</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <br />
            <br />
            <br />
            <label>Enter Body:</label>
            <textarea onChange={(e) => setBody(e.target.value)} value={body} />
            <br />
            <br />
            <br />
            <button>add post</button>
          </form>
        </div>
        <div className="right-div">
          {isEdit ? (
            <form onSubmit={editSubmitHandler}>
              <label>Id:</label>
              <input type="text" value={ediId} disabled />

              <br />
              <br />
              <br />
              <label>Enter Title:</label>
              <input
                type="text"
                onChange={(e) => setEDITTitle(e.target.value)}
                value={ediTitle}
              />
              <br />
              <br />
              <br />
              <label>Enter Body:</label>
              <textarea
                onChange={(e) => setEDITBody(e.target.value)}
                value={editBody}
              />
              <br />
              <br />
              <br />
              <button>update post</button>
            </form>
          ) : null}
        </div>
      </div>
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="all-cards">
            {myPosts.map((post, index) => {
              return (
                <div className="card" key={index}>
                  <h2>{post.id}</h2>
                  <div className="container">
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </div>
                  <button
                    className="btn-class"
                    onClick={() => editHlickHandler(post)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-class"
                    onClick={() => deleteHandler(post)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default AddPost;

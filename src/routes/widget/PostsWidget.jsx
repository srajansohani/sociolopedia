import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostWidget from "./PostWidget";
import { setPosts } from "state";

function PostsWidget({ userId, isProfile = false }) {
  const token = useSelector((state) => state.token);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const getPosts = async () => {
    const res = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    dispatch(setPosts({ posts: data }));
  };
  const getUserPosts = async () => {
    const res = await fetch("http://localhost:3001/~${userId}/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    dispatch(setPosts({ posts: data }));
  };
  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => {
          return (
            <PostWidget
              key={_id}
              postId={_id}
              userId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          );
        }
      )}
    </>
  );
}

export default PostsWidget;

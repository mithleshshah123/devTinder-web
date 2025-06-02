import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  
    const [error, setError] = useState("Something went wrong!");

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to update profile");
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if(feed.length<=0) return <h1 className="text-2xl font-bold flex justify-center my-10">No More User Found</h1>

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]}/>
      </div>
    )
  );
};

export default Feed;

import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestsSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequests = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id, {}, { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      //err
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      //err
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <h1 className="flex justify-center my-10 font-bold text-2xl text-white">No Request Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl">Connection Requests</h1>
      {requests.map((request) => {
        const {
          _id,
          firstName,
          lastName,
          photoUrl,
          gender,
          about,
          age,
          skills,
        } = request.fromUserId;

        return (
          <div
            key={_id}
            className="flex items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-6">
              <h2 className="font-bold text-xl">
                {firstName + "," + lastName}
              </h2>
              {age && gender && <p>{age + "," + gender}</p>}
              <p>{about}</p>
              <p>{skills}</p>
            </div>
            <div className="flex flex-row items-end ml-auto space-y-2">
              <button
                className="btn btn-secondary m-2"
                onClick={() => reviewRequests("rejected",request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-accent m-2"
                onClick={() => reviewRequests("accepted",request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;

import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      localStorage.setItem("user", JSON.stringify(res.data));
      return navigate("/feed");

    } catch (err) {
      setError(err?.response?.data || "Something went wrong!");
      console.error(err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      localStorage.setItem("user", JSON.stringify(res.data.data));
      return navigate("/profile");
    } catch (err) {
      //err

      setError(err?.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-3xl text-bold justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          <p className="flex justify-center">
            {isLoginForm
              ? "Connect with developers around the world"
              : "Join our developer community"}
          </p>
          <form onSubmit={isLoginForm ? handleLogin : handleSignUp}>
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text my-1">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    placeholder="John"
                    className="input input-bordered w-full max-w-xs mb-3"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </label>

                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text my-1">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Doe"
                    className="input input-bordered w-full max-w-xs mb-3"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>
              </>
            )}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text my-1">Email Id:</span>
              </div>
              <input
                type="email"
                value={emailId}placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs mb-3"
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </label>

            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text my-1">Password</span>
              </div>
              <input
                type="password"
                value={password}
                placeholder="Enter Your Password"
                className="input input-bordered w-full max-w-xs mb-3"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <p className="text-red-500">{error}</p>

            <div className="card-actions justify-center m-4">
              <button type="submit" className="btn btn-primary">
                {isLoginForm ? "Login" : "Sign Up"}
              </button>
            </div>
            <p
              className="text-center cursor-pointer py-2"
              onClick={() => setIsLoginForm((value) => !value)}
            >
              {isLoginForm
                ? "Don't have an account? Signup"
                : "Already have an account? Login"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

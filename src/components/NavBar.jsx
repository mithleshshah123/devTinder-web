import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import devLinkLogo from "../assets/devlink-logo.png";

const NavBar = ({ minimal }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      localStorage.removeItem("user");
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm px-4">
      {/* LEFT: Logo */}
      <div className="navbar-start">
        <Link
          to={user ? "/feed" : "/"}
          className="btn btn-ghost flex items-center gap-2 text-xl"
        >
          <img src={devLinkLogo} alt="DevLink" className="h-8 w-auto" />
          <span>DevLink</span>
        </Link>
      </div>

      {/* RIGHT: User Info */}
      {!minimal && user && (
        <div className="navbar-end flex items-center gap-3">
          <span className="hidden sm:block">Welcome, {user.firstName}</span>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user photo"
                  src={user.photoUrl || "/default-avatar.png"}
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <Link to="/profile">
                  Profile <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

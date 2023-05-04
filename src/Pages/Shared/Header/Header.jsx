import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Header = () => {
  const { user, loggedOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    loggedOut()
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="navbar main-container  absolute top-5 left-0 right-0 p-0 px-5 md:px-0">
        <div className="navbar-start">
          <Link to="/">
            <p className="text-3xl md:text-4xl font-extrabold border-red-800 border">
              Trad
              <small className=" text-white main-bg p-1 border border-red-800 border-b-0">
                Food
              </small>
            </p>
          </Link>
        </div>
        <div className="navbar-center">
          <div className="space-x-3">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default:")}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default:")}
            >
              Blog
            </NavLink>
          </div>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className=" avatar"
                  title={user?.displayName}
                >
                  <div className="w-14 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button onClick={handleLogOut} className="logout-btn">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="login-btn">
                <Link to="/login">
                  <button className="main-btn">Login</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

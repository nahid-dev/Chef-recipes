import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar main-container   absolute top-5 left-0 right-0 p-0">
        <div className="navbar-start">
          <Link to="/">
            <p className="text-4xl font-extrabold border-red-800 border">
              Trad
              <small className=" text-white main-bg p-1 border border-red-800 border-b-0">
                Food
              </small>
            </p>
          </Link>
        </div>
        <div className="navbar-center">
          <div className="space-x-3">
            <NavLink to="/">Home</NavLink>
            <NavLink>Blog</NavLink>
          </div>
        </div>
        <div className="navbar-end space-x-3">
          <div>
            <button>
              <div className="avatar" title="Hello">
                <div className="w-14 rounded-full">
                  <img
                    src={`https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80`}
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="login-btn">
            <Link to="/login">
              <button className="main-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

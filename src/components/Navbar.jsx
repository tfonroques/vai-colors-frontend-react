import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = ({ user }) => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg justify-content-between shadow">
        <NavLink className="navbar-brand" to="/">
          <motion.div
            className="logo font-weight-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Vaicolors.
          </motion.div>
        </NavLink>
        <div className="form-inline">
          <NavLink className="nav-item nav-link" to="/about">
            About me
          </NavLink>
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/admin">
                Admin
              </NavLink>
              <NavLink className="nav-item nav-link" to="/signout">
                Sign out
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

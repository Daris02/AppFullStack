import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light mb-5">
        <div className="container-fluid d-flex justify-content-center">
            <Link to="/" className="navbar-brand mx-5 link-primary" >Home</Link>
            <Link to="/list" className="navbar-brand mx-5 link-primary" >List</Link>
            <Link to="/form" className="navbar-brand mx-5 link-primary" >Add User</Link>
        </div>
      </nav>
    </>
  );
}

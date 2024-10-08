import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <input
        id="wd-username"
        defaultValue="alice"
        placeholder="username"
        className="form-control mb-2"/>
      <input
        id="wd-password"
        defaultValue="123"
        placeholder="password"
        type="password"  //to hide the password
        className="form-control mb-2"/>
      <input
        id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="form-control mb-2"/>
      <input
        id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="form-control mb-2"/>
      <input
        id="wd-dob"
        defaultValue="2000-01-01"
        type="date"
        className="form-control mb-2"/>
      <input
        id="wd-email"
        defaultValue="alice@wonderland"
        type="email"
        placeholder="Email"
        className="form-control mb-2"/>
      <select
        id="wd-role"
        defaultValue="FACULTY"
        className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        id="wd-signout-btn"
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100"
      >
        Sign out
      </Link>
    </div>
  );
}
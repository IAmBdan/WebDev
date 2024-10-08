import React from "react";
import { NavLink } from "react-router-dom";

const AccountNavigation = () => {
  const navItems = [
    { to: "Signin", label: "Sign in" },
    { to: "Signup", label: "Sign up" },
    { to: "Profile", label: "Profile" }
  ];
//uses a map to create a list of nav items which are linke to the corresponding pages,
//lets me write less code and makes it easier to add more nav items later
//same logic as courses navigation
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={`/Kanbas/Account/${item.to}`}
          id={`wd-account-${item.to.toLowerCase()}-link`}
          className={({ isActive }) =>
            `list-group-item border-0 ${
              isActive ? "active fw-bold" : "text-danger"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default AccountNavigation;
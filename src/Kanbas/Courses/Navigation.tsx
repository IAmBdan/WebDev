import React from "react";
import { NavLink } from "react-router-dom";

//each item represents a nav item that will be displayed in the navigation, just so we dont need to 
//repeat code
const CoursesNavigation = () => {
  const navItems = [
    { to: "Home", label: "Home" },
    { to: "Modules", label: "Modules" },
    { to: "Piazza", label: "Piazza" },
    { to: "Zoom", label: "Zoom" },
    { to: "Assignments", label: "Assignments" },
    { to: "Quizzes", label: "Quizzes" },
    { to: "People", label: "People" }
  ];
//again dont want to use hooks so using NavLink
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={`/Kanbas/Courses/${item.to}`}
          id={`wd-course-${item.to.toLowerCase()}-link`}
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

export default CoursesNavigation;
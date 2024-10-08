import React from 'react';
import { FaUserCircle } from "react-icons/fa";
//same as others, can now add to the people and will add to the table
const PeopleTable = () => {
  const people = [
    {
      firstName: "Tony",
      lastName: "Stark",
      loginId: "001234561S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-01",
      totalActivity: "10:21:32"
    },
    {
      firstName: "Bruce",
      lastName: "Wayne",
      loginId: "324omo4i32op",
      section: "S102",
      role: "STUDENT",
      lastActivity: "2024-10-08",
      totalActivity: "08:56:11"
    },
    {
      firstName: "Steve",
      lastName: "Rogers",
      loginId: "dsfmkodkosmfmkos",
      section: "S103",
      role: "Teacher",
      lastActivity: "2024-10-08",
      totalActivity: "08:57:12"
    },
    {
      firstName: "Natasha",
      lastName: "Romanoff",
      loginId: "ksdfssdf",
      section: "S104",
      role: "TA",
      lastActivity: "2024-10-08",
      totalActivity: "08:58:33"
    }
  ];

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{person.firstName}</span>{" "}
                <span className="wd-last-name">{person.lastName}</span>
              </td>
              <td className="wd-login-id">{person.loginId}</td>
              <td className="wd-section">{person.section}</td>
              <td className="wd-role">{person.role}</td>
              <td className="wd-last-activity">{person.lastActivity}</td>
              <td className="wd-total-activity">{person.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleTable;
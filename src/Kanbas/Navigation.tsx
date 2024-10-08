    import "./index.css"; 
    import { Link, NavLink, useLocation } from "react-router-dom";
    import { AiOutlineDashboard } from "react-icons/ai";
    import { IoCalendarOutline } from "react-icons/io5";
    import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
    import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

    
    //using Navlink because did not want to get into the world of hooks as we did not cover it muchin class
    // had to google documentation for navlink 
    export default function KanbasNavigation() {
      return (
      <div id="wd-kanbas-navigation" style={{ width: 110 }} 
      className="list-group rounded-0 position-fixed
      bottom-0 top-0 d-none d-md-block bg-black z-2">
    <a id="wd-neu-link" target="_blank" 
     href="https://www.northeastern.edu/"
     className="list-group-item bg-black border-0 text-center">
     <img src="/NU_RGB_monogram_R.png" width="75px" /></a>




     <NavLink to="/Kanbas/Account" id="wd-account-link"
           className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? 'bg-white' : 'bg-black'}`}>
        {({ isActive }) => (
          <>
            <FaRegCircleUser className={`fs-1 ${isActive ? 'text-danger' : 'text-white'}`} /><br />
            <span className={isActive ? 'text-danger' : 'text-white'}>Account</span>
          </>
        )}
      </NavLink>


     <NavLink to="/Kanbas/Dashboard" id="wd-dashboard-link"
           className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? 'bg-white' : 'bg-black'}`}>
        {({ isActive }) => (
          <>
            <AiOutlineDashboard className={`fs-1 ${isActive ? 'text-danger' : 'text-danger'}`} /><br />
            <span className={isActive ? 'text-danger' : 'text-white'}>Dashboard</span>
          </>
        )}
      </NavLink>



    <NavLink to="/Kanbas/Courses" id="wd-courses-link"
           className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? 'bg-white' : 'bg-black'}`}>
        {({ isActive }) => (
          <>
            <LiaBookSolid className={`fs-1 ${isActive ? 'text-danger' : 'text-danger'}`} /><br />
            <span className={isActive ? 'text-danger' : 'text-white'}>Courses</span>
          </>
        )}
      </NavLink>

    {/* complete styling the rest of the links */}


    <NavLink to="/Kanbas/Calendar" id="wd-calendar-link"
           className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? 'bg-white' : 'bg-black'}`}>
        {({ isActive }) => (
          <>
            <IoCalendarOutline className={`fs-1 ${isActive ? 'text-danger' : 'text-danger'}`} /><br />
            <span className={isActive ? 'text-danger' : 'text-white'}>Calendar</span>
          </>
        )}
      </NavLink>

    
      <NavLink to="/Kanbas/Inbox" id="wd-inbox-link"
           className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? 'bg-white' : 'bg-black'}`}>
        {({ isActive }) => (
          <>
            <FaInbox className={`fs-1 ${isActive ? 'text-danger' : 'text-danger'}`} /><br />
            <span className={isActive ? 'text-danger' : 'text-white'}>Inbox</span>
          </>
        )}
      </NavLink>



      <NavLink to="/Labs" id="wd-labs-link"
           className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? 'bg-white' : 'bg-black'}`}>
        {({ isActive }) => (
          <>
            <LiaCogSolid className={`fs-1 ${isActive ? 'text-danger' : 'text-danger'}`} /><br />
            <span className={isActive ? 'text-danger' : 'text-white'}>Labs</span>
          </>
        )}
      </NavLink>

    </div>
    );}



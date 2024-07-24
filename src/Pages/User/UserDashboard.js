import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { HiOutlineTicket } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { Box } from "@mui/material";
import { Link, Outlet } from 'react-router-dom';
import { TbTicketOff } from "react-icons/tb";
import '../Pages.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      {/* navbar */}
      <div className="user-dashboard__header">
        <div className="user-dashboard__header-left">
          <span className="user-dashboard__icon"><FaDotCircle style={{ marginRight: "5px", fontSize: "37px", color: "#c08610" }} /></span>
          <p className="user-dashboard__name">Evnti</p>
        </div>
        <div className="user-dashboard__header-right">
          {/* logout */}
          <button className="user-dashboard__logout-btn">
            <IoMdLogOut className="logout-sign" fontSize={"24px"} />
            <div className="logout-text">Logout</div>
          </button>
        </div>
      </div>

      {/* side bar */}
      <div className="user-dashboard__content">
        <div className="user-dashboard__sidebar">
          {/* Events and Event booking */}
          <Link to={'events'} className="user-dashboard__sidebar-link">
            <HiOutlineTicket fontSize={"24px"} />
          </Link>

          {/* Booked Events and Cancel booking */}
          <Link to={'bookedevent'} className="user-dashboard__sidebar-link">
            <TbTicketOff fontSize={"24px"} />
          </Link>
        </div>

        {/* dispaly section outlet */}
        <div className="user-dashboard__projects-section">
          <div className="user-dashboard__project-boxes jsGridView">
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              <Outlet />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

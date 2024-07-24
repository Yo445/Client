import React from 'react'
import { FaDotCircle } from 'react-icons/fa';
import { TiUserAdd } from "react-icons/ti";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import '../Pages.css';

export default function AdminDashboard() {
  return (
    <div className="user-dashboard">
      {/* navbar */}
      <div className="user-dashboard__header">
        <div className="user-dashboard__header-left">
          <span className="user-dashboard__icon"><FaDotCircle style={{ marginRight: "5px", fontSize: "37px", color: "#c08610" }} /></span>
          <p className="user-dashboard__name">Evnti</p>
        </div>
        {/* logout */}
        <div className="user-dashboard__header-right">
          <button className="user-dashboard__logout-btn">
            <IoMdLogOut className="logout-sign" fontSize={"24px"} />
            <div className="logout-text">Logout</div>
          </button>
        </div>
      </div>

      {/* side bar */}
      <div className="user-dashboard__content">
        <div className="user-dashboard__sidebar">
          <Link to="adminevent" className="user-dashboard__sidebar-link">
            <HiOutlineTicket fontSize={"24px"} />
          </Link>
          <Link to="adduser" className="user-dashboard__sidebar-link">
            <TiUserAdd fontSize={"24px"} />
          </Link>
          <Link to="addevent" className="user-dashboard__sidebar-link">
            <BiSolidCalendarEdit fontSize={"24px"} />
          </Link>
        </div>

        {/* dispaly section outlet*/}
        <div className="user-dashboard__projects-section">
          <div className="user-dashboard__project-boxes jsGridView">
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              <Outlet />
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

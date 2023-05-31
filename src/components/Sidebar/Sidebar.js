import React from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
const SIDEBAR_CONTENT = [
  { label: "Dashboard", key: "dashboard" },
  { label: "All Products", key: "all-products" },
  { label: "Orders", key: "orders" },
  { label: "Favorites", key: "favorites" },
  { label: "New Arrival", key: "newArrival" },
];

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-logo sidebar-logo-wrapper">
        <h2>Logo</h2>
      </div>

      {SIDEBAR_CONTENT.map((item) => (
        <NavLink to={"/" + item.key} className="sidebar-content">
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;

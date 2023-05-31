import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [sidebarContent, setSidebarContent] = useState([
    { label: "Dashboard", key: "dashboard", isActive: false },
    { label: "All Products", key: "all-products", isActive: false },
    { label: "Orders", key: "orders", isActive: false },
    { label: "Favorites", key: "favorites", isActive: false },
    { label: "New Arrival", key: "newArrival", isActive: false },
  ]);

  const handleLinkClick = (item) => {
    let dummySidebarContent = sidebarContent.filter((el) => {
      if (item.key === el.key) {
        return {
          label: item.label,
          key: item.key,
          isActive: true,
        };
      }

      return el;
    });

    setSidebarContent(dummySidebarContent);
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-logo sidebar-logo-wrapper">
        <h2>Logo</h2>
      </div>

      {sidebarContent.map((item) => (
        <NavLink
          onClick={() => handleLinkClick(item)}
          to={"/" + item.key}
          className={`sidebar-content ${item.isActive ? "active" : ""}`}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;

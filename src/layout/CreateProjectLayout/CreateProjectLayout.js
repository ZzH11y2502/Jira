import React from "react";
import SideBar from "../../component/SideBar/SideBar";
import Breadcrumb from "../../page/Breadcrums/Breadcrums";
import { Outlet, useLocation } from "react-router-dom";
import { FloatButton } from "antd";

export default function CreateProjectLayout() {
  const location = useLocation();
  const paths = [
    { label: "Dashboard", url: "/" },
    { label: "Create Project", url: location.pathname },
  ];
  return (
    <div className="flex items-start home__layout">
      <SideBar />
      <div className="grow">
        <div
          className="container"
          style={{ margin: "auto", maxWidth: "700px" }}
        >
          <Breadcrumb paths={paths} />
          <Outlet />
        </div>
      </div>

      <FloatButton.BackTop />
    </div>
  );
}

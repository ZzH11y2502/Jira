import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="h-screen">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <div className="flex items-center justify-center p-10">
              <img
                style={{ height: 80, width: 80 }}
                src="https://cdn.icon-icons.com/icons2/2845/PNG/512/jira_logo_icon_181275.png"
                alt=""
              />
            </div>
            <Sidebar.Item icon={HiChartPie}>
              <NavLink to="/home">Dashboard</NavLink>
            </Sidebar.Item>
            <Sidebar.Item icon={HiViewBoards} label="Beta" labelColor="dark">
              Jira Clone
            </Sidebar.Item>

            <Sidebar.Item icon={HiUser}>
              <NavLink to="/managementpage">Project Management</NavLink>
            </Sidebar.Item>
            <Sidebar.Item icon={HiShoppingBag}>
              <NavLink to={"/createproject"}>Create Project</NavLink>
            </Sidebar.Item>
            <Sidebar.Item icon={HiInbox}>
              <NavLink to={"/users-management"}>User Management</NavLink>
            </Sidebar.Item>
            <Sidebar.Item icon={HiArrowSmRight}>Sign In</Sidebar.Item>
            <Sidebar.Item icon={HiTable}>Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

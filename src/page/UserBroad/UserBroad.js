import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  getUserAction,
} from "../../redux/manageUserSlice/manageUserSlice";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function UserBroad() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);
  const userList = useSelector((state) => state.getUserAction.userList);
  console.log("🚀 ~ UserBroad ~ userList:", userList);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUserAction(userId));
    console.log("Removed");
    dispatch(getUserAction());
  };

  const handleUpdate = (user) => {
    console.log(user, "User changed");
    const userQueryString = encodeURIComponent(JSON.stringify(user));

    navigate(`./update-user?user=${userQueryString}`);
  };
  return (
    <div>
      {/* Header */}
      <div style={{ margin: "auto" }}>
        <p className="font-sans text-center head__title">User Dashboard</p>
      </div>
      {/* Contents */}
      <table
        className="w-full text-sm text-left text-gray-500 table-fixed rtl:text-right dark:text-gray-400"
        style={{
          fontFamily: "Arial",
          fontSize: "14px",
          lineHeight: 1.6,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
        }}
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              User ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone number
            </th>
            <th scope="col" className="py-3 px-9">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, userId) => {
            return (
              <tr className="hover:bg-gray-200" key={userId}>
                <td className="px-6 py-4 ">{user.userId}</td>
                <td className="px-6 py-4 ">{user.name}</td>
                <td className="px-6 py-4 ">{user.email}</td>
                <td className="px-6 py-4 ">{user.phoneNumber}</td>
                <td className="px-6 py-4 ">
                  <Button
                    className="w-20 text-white bg-green-500"
                    onClick={() => handleUpdate(user)}
                  >
                    Update
                  </Button>
                  <br />

                  <Button
                    className="w-20 text-white bg-red-500"
                    onClick={() => handleDeleteUser(user.userId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserBroad;

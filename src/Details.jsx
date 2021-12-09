import { NavLink, Outlet } from "react-router-dom";
import { getUsers } from "./userData.js";

export default function Details() {
  const users = getUsers();
  return (
    <>
      {users.map((user) => (
        <NavLink
          style={{ padding: ".5rem" }}
          to={`/details/${user.id}`}
          key={user.id}
        >
          {user.name}
        </NavLink>
      ))}

      <Outlet />
    </>
  );
}

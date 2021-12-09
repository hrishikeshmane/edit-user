import { Link, Outlet, useParams } from "react-router-dom";
import { getUser } from "./userData.js";

export default function User() {
  const params = useParams();
  let user = getUser(params.id);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h3>{user.name}</h3>
        <h3>{user.phone}</h3>
        <h3>{user.email}</h3>
        <Link to="edit">click here to edit</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

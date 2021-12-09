import { Link, Outlet } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Users</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link style={{ padding: "1rem" }} to="/details">
          Show Users
        </Link>
        <Link style={{ padding: "1rem" }} to="/adduser">
          Add User
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

import { Link, Outlet } from "react-router-dom";
import "./styles.css";

export default function AddUser() {
  const editOptions = ["name", "phone", "email"];
  return (
    <>
      {/* <nav>
        {editOptions.map((editOption) => (
          <Link
            style={{ padding: "1rem" }}
            to={`/edit/${editOption}`}
            key={editOption}
          >
            {editOption}
          </Link>
        ))}
      </nav>
      <Outlet /> */}
      <h2>Add User</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px"
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <br />
        <button>Add user</button>
      </div>
    </>
  );
}

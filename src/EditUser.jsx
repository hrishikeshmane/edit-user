import { useState } from "react";
import { useParams } from "react-router-dom";
import { editUser } from "./userData";

export default function EditUser() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const params = useParams();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px"
      }}
    >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        onChange={(e) => {
          e.preventDefault();
          setPhone(e.target.value);
        }}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          editUser(params.id, name, phone, email);
        }}
      >
        Edit
      </button>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";
import Details from "./Details";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import User from "./User";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="details" element={<Details />}>
          <Route path=":id" element={<User />}>
            <Route path="edit" element={<EditUser />} />
          </Route>
        </Route>
        <Route path="adduser" element={<AddUser />}>
          <Route index element={<p>Select an option</p>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

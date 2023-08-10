import { Route, Routes } from "react-router";
import AddAdmin from "./AddAdmin";
import CreateShop from "./CreateShop";
import ChangeRole from "./ChangeRole";
import ChangeRoleOnRequest from "./ChangeRoleOnRequest";
import DeleteShop from "./DeleteShop";
import ListShop from "./ListShop";
import ListRequest from "./ListRequest";

function Admin() {
  return (
    <div>
      <Routes>
        <Route path="/ChangeRole/*" element={<ChangeRole />} />
        <Route
          path="/ChangeRoleOnRequest/*"
          element={<ChangeRoleOnRequest />}
        />
        <Route path="/AddAdmin/*" element={<AddAdmin />} />
        <Route path="/CreateShop/*" element={<CreateShop />} />
        <Route path="/DeleteShop/*" element={<DeleteShop />} />
        <Route path="/ListShop/*" element={<ListShop />} />
        <Route path="/ListRequest/*" element={<ListRequest />} />
      </Routes>
    </div>
  );
}
export default Admin;

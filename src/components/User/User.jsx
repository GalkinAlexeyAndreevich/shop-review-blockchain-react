import RequestRoleChange from "./RequestRoleChange";
import ListShop from "./ListShop";
import ListReviewOnShop from "./ListReviewOnShop";
import { Route, Routes } from "react-router";
import Profile from "./Profile";
function User() {
  return (
    <div>
      <Routes>
        <Route path="/RequestRoleChange/*" element={<RequestRoleChange />} />
        <Route path="/ListShop/*" element={<ListShop />} />
        <Route path="/ListReviewOnShop/*" element={<ListReviewOnShop />} />
        <Route path="/Profile/*" element={<Profile />} />
        
      </Routes>
    </div>
  );
}
export default User;

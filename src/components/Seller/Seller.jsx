import { Route, Routes } from "react-router";
import ReviewList from "./ReviewList";
import RequestRoleChange from "./RequestRoleChange";
function Seller(){
    return(
        <div>
            <Routes>
                <Route path="/CommentReview/*" element={ <ReviewList />} />
                <Route path="/RequestRoleChange/*" element={ <RequestRoleChange />} />
            </Routes>
           
        </div>
    )
}
export default Seller
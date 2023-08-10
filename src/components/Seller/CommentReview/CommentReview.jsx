import React from "react";
import {createCommentThunk} from "../../../models/users"
import { useSelector,useDispatch } from "react-redux";


export default function CommentReview({id_shop,id_review}) {
  let comment = React.useRef();
  const dispatch = useDispatch()
  let address = useSelector(state =>state.auth.currentAccount)
    return (
      <div>
        <input placeholder="comment" ref={comment} />
        <button
          onClick={() => {
            dispatch(createCommentThunk({owner:address,id_shop:id_shop,
              id_review:id_review,comment:comment.current.value}))
          }}
        >
          Comment
        </button>
      </div>
    );
}

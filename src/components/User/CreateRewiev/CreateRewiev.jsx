import React from "react";
import { useSelector,useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { createReviewThunk } from "../../../models/users";

function isReview(reviews,owner){
  console.log(reviews,owner)
  for(let item of reviews){
    if(item.owner === owner){
      alert("Вы уже оставили отзыв")
      return true
    }
  }
  return false
}

export default function CreateRewiev() {
  let comment = React.useRef();
  const [countStars, setCountStars] = useState(0)
  const dispatch = useDispatch()
  
  const address = useSelector((state) => state.auth.currentAccount);
  const id_shop = useSelector(state=>state.user.currentShop)
  const reviews = useSelector(state=>state.user.reviews)
  const thirdExample = {
    size: 40,
    count: 10,
    isHalf: false,
    value: 4,
    color: "#ffb0fc",
    activeColor: "#ffeb61",
    onChange: (newValue) => {
      setCountStars(newValue);
      console.log(`${newValue}`);
    },
  };
  return (
    <div>
      <ReactStars {...thirdExample} />
      <input placeholder="create Review" ref={comment} />
      <button
        onClick={() => {
          if(isReview(reviews,address)){return}
          dispatch(createReviewThunk({owner:address,id_shop:id_shop,
            stars:countStars,comment:comment.current.value}))
        }}
      >
        Create
      </button>

    </div>
  );
}

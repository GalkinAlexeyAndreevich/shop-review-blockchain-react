import {useSelector } from "react-redux";
import React from "react";
import style from "./ReviewList.module.css";
import Review from "./Review";
function ReviewList() {
  let reviews = useSelector((state) => state.user.reviews);
  let currentShop = useSelector((state) => state.user.currentShopAddress);
  return (
    reviews.length >0?
    <div>
      <h1>Магазин: {currentShop}</h1>
      <p>Отзывов: {reviews.length}</p>
      <ul className={style.ul}>
        {reviews.map(
          (item,index) => (
            <Review key={new Date()} item={item} index={index}/>
          )
        )}
      </ul>
    </div>
    :null
  )
}
export default ReviewList;
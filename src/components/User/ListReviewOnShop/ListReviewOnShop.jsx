import {useSelector} from "react-redux";
import React from "react";
import style from "./ListReviewOnShop.module.css";
import Review from "./Review";
import CreateRewiev from "../CreateRewiev";
import { usersApi } from "../../../api";
function getAvg(reviews){
  console.log(reviews)
  console.log("avg")
  let summa = 0
  for(let item of reviews){
    summa = summa +Number(item.stars)
  }
  console.log(summa)
  return (summa/reviews.length).toFixed(1)
}
function ListReviewOnShop() {
  let reviews = useSelector((state) => state.user.reviews);
  let currentShop = useSelector((state) => state.user.currentShopAddress);
  let currentShopId = useSelector((state) => state.user.currentShop);
  let currentUser = useSelector((state) => state.auth.currentAccount);
  if(currentShop ===  "0x0000000000000000000000000000000000000000"){
    return
  }
  return (
    <div>
      <h1>Магазин: {currentShop}</h1>
      <p>Рейтинг магазина: {getAvg(reviews)}</p>
      <p>Отзывов: {reviews.length}</p>
      <button onClick={()=>{
        let answer = window.confirm("Вы уверены, что хотите у нас работать?")
        if(!answer){return}
        console.log(currentShopId,currentUser)
          
       usersApi.requestRoleChange(
          1,
          currentShopId,
          currentUser
        )
        alert("Заявка отправлена")
      }}
      >Хочу у вас работать</button>
      <CreateRewiev />
      {reviews.length >0?
      
      <ul className={style.ul}>
        
        {reviews.map(
          (item,index) => {
            console.log(item)
            return <Review key={index} item={item} index={index}/>
          }
            
        )}
      </ul>:null}
    </div>
    
  );
}
export default ListReviewOnShop;

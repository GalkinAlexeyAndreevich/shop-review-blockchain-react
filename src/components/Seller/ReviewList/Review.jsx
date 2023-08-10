import style from "./ReviewList.module.css"
import Comment from "./Comment";
import CommentReview from "../CommentReview";
import {useState} from "react"
function LikeDislike(arr){
    console.log(arr)
    let like = 0
    let dislike = 0
    for(let item of arr){
        if(item.rate){
            like = like + 1 
        }
        else{
            dislike = dislike + 1 
        }
    }
    return {like,dislike}
}
function Review(item){  
    let item1 = item.item
    let id_review = item.index
    // const [arrow,setArrow] = useState(false)
    const [newComment,setNewComment] = useState(false)
    let likeDislike = LikeDislike(item1.LikeDislikes)
    return(
        <li key={id_review} className={style.li}>   
            <p>Кол-во звёзд: {item1.stars}</p>
            <p>Хозяин отзыва: {item1.owner}</p>
            <p>Комментарий: {item1.comment}</p>
            <button className={style.like}>
            {likeDislike.like}
            </button>
            <button className={style.dislike}>
            {likeDislike.dislike}
            </button>
            <button className={style.newComment} onClick={()=>{setNewComment(!newComment)}}>
            Ответить</button>
            {newComment?<CommentReview id_shop={item1.id_shop} id_review={id_review}/>:null}
            <div className={style.comment}>
                <p>Ответы на комментарий: </p>
                
                {/* <button className={style.arrow} onClick={()=>{setArrow(!arrow)}}>
                {arrow?
                <img src="../../../../public/up-arrow.png" alt="" />:
                <img src="../../../../public/down-arrow.png" alt="" />
                }
                </button> */}
                {item1.comments.map((element, index1) => {
                    console.log(element)
                    return (
                        <Comment item={element} id_review={id_review} index={index1}/>
                    );
                })}  
            </div>

        </li>
    )
}
export default Review

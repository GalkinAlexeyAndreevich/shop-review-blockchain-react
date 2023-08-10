import style from "./ListReviewOnShop.module.css"
import { useDispatch,useSelector } from "react-redux";
import { leaveLikeDislikeOnReviewThunk } from "../../../models/users";
import Comment from "./Comment";
import CommentRewiev from "../CommentRewiev";
import {useState} from "react"

function LikeDislike(arr,currentAccount){
    console.log(arr,currentAccount)
    let like = 0
    let dislike = 0
    let isLike = false
    let isDislike = false
    for(let item of arr){
        if(item.rate){
            like = like + 1
            if(item.owner === currentAccount){
                isLike = true
            } 
        }
        else{
            dislike = dislike + 1 
            if(item.owner === currentAccount){
                isDislike = true
            }
        }
        
    }
    console.log(like,dislike,isLike,isDislike)
    return {like,dislike,isLike,isDislike}
}
function Review(item){  
    let item1 = item.item
    let id_review = item.index
    let currentAccount = useSelector(state=>state.auth.currentAccount)
    const [newComment,setNewComment] = useState(false)
    const [openComments,setOpenComments] = useState(false)
    const dispatch = useDispatch()
    let likeDislike = LikeDislike(item1.LikeDislikes,currentAccount)
    return(
        <li key={id_review} className={style.li}>   
            <p>Кол-во звёзд: {item1.stars}</p>
            <p>Хозяин отзыва: {item1.owner}</p>
            <p>Комментарий: {item1.comment}</p>
            <button
            className={`${likeDislike.isLike?style.activeLike:style.like} ${likeDislike.isLike || likeDislike.isDislike?style.pointer:null}`}
            onClick={() => {
                dispatch(
                leaveLikeDislikeOnReviewThunk({
                    owner: currentAccount,
                    id_shop: item1.id_shop,
                    id_review: id_review,
                    rate: true,
                }))
            }}
            >
            {likeDislike.like}
            </button>
            <button
            className={`${likeDislike.isDislike?style.activeDislike:style.dislike} ${likeDislike.isLike || likeDislike.isDislike?style.pointer:null}`}
            onClick={() => {
                dispatch(
                leaveLikeDislikeOnReviewThunk({
                    owner: currentAccount,
                    id_shop: item1.id_shop,
                    id_review: id_review,
                    rate: false,
                }));                
            }}
            >
            {likeDislike.dislike}
            </button>
            <button className={style.newComment} onClick={()=>{setNewComment(!newComment)}}>
            Ответить</button>
            {newComment?<CommentRewiev id_shop={item1.id_shop} id_review={id_review}/>:null}
            {item1.comments.length?
            <div className={style.comment}>
                <div className={style.arrowDiv} onClick={()=>{setOpenComments(!openComments)}}>
                <button className={openComments?style.arrowUp:style.arrowDown} >
                </button>
                <p>ответов: {item1.comments.length} </p>
                </div>

                
                {openComments?item1.comments.map((element, index1) => {
                    console.log(element)
                    return (
                        <Comment item={element} id_review={id_review} index={index1}/>
                    );
                }):null}  
            </div>:null}

        </li>
    )
}
export default Review

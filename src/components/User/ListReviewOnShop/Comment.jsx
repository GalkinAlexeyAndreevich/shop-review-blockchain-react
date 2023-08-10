import style from "./ListReviewOnShop.module.css"
import { useDispatch,useSelector } from "react-redux";
import { leaveLikeDislikeOnCommentThunk } from "../../../models/users";
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
function Comment(item){
    let item1 = item.item
    let currentAccount = useSelector(state=>state.auth.currentAccount)
    let id_shop = useSelector(state =>state.user.currentShop)
    let likeDislike = LikeDislike(item1.LikeDislikes,currentAccount)
    const dispatch = useDispatch()
    return(
        <div key={item.index}>
        <p>Владелец: {item1.owner}</p>
        <p>Комментарий: {item1.comment}</p>
        <button
            className={`${likeDislike.isLike?style.activeLike:style.like} ${likeDislike.isLike || likeDislike.isDislike?style.pointer:null}`}
            onClick={() => {
                dispatch(
                leaveLikeDislikeOnCommentThunk({
                    owner: currentAccount,
                    id_shop: id_shop,
                    id_review: item.id_review,
                    id_comment:item.index,
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
                leaveLikeDislikeOnCommentThunk({
                    owner: currentAccount,
                    id_shop: id_shop,
                    id_review: item.id_review,
                    id_comment:item.index,
                    rate: false,
                    }));                
                }}
        >
        {likeDislike.dislike}
        </button>
      </div>
    )

}
export default Comment
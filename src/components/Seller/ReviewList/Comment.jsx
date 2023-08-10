import style from "./ReviewList.module.css"
function LikeDislike(arr){
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
function Comment(item){
    let item1 = item.item
    let likeDislike = LikeDislike(item1.LikeDislikes)
    return(
        <div key={item.index}>
        <p>Владелец: {item1.owner}</p>
        <p>Комментарий: {item1.comment}</p>
        <button className={style.like}>
        {likeDislike.like}
        </button>
        <button className={style.dislike}>
        {likeDislike.dislike}
        </button>
      </div>
    )

}
export default Comment
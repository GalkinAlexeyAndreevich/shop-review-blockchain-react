import {useSelector,useDispatch} from "react-redux";
import { usersApi } from "../../../api";
function Profile(){
    const shopWork = useSelector(state=>state.auth.id_shop)
    const currentUser = useSelector(state=>state.auth.currentAccount)
    const history = useSelector(state=>state.user.history)
    return(
        <div>
            {console.log(history)}
            {shopWork<0?"Вы не работаете":`Вы работаете в магазине ${shopWork}`}
            {shopWork>-1?
            <button onClick={()=>{
                let answer = window.confirm("Вы точно хотите уводиться?")
                if(!answer){return}
                usersApi.requestRoleChange(          
                    0,
                    shopWork,
                    currentUser)
                
            }}>Уволиться</button>
            :null}
            <div>
                История
                {history.map((value, index) => {
                    return <p key={index}>{value}</p>
                })}
            </div>
        </div>
    )
}
export default Profile
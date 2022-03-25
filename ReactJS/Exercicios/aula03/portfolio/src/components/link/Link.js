import {Link} from "react-router-dom";
import style from "./Link.module.css"

function FuncaoLink({para, item}) {
    return (
        <Link className={style.linkMenu} to={para}>{item}</Link>
    )
}

export default FuncaoLink;
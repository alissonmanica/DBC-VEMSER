import FuncaoLink from "../link/Link";
import style from "./Menu.module.css"

function Menu() {
    return (
    <nav className={style.nav}>
        <ul className={style.ul}>
           <li>
               <FuncaoLink para="/" item="Perfil" />
            </li>            
           <li>
               <FuncaoLink para="/repositorio" item="Repositorio" />
            </li>            
           <li>
               <FuncaoLink para="/contato" item="Contato" />
            </li>            
        </ul>
    </nav>
    )
}

export default Menu;
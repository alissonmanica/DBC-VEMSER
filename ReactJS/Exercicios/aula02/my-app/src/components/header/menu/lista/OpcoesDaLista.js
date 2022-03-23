import LinkOpcao from "./LinkDaOpcao";
import styles from "./Lista.module.css"

const OpcaoLista = ({link}) => {
    return (
        <li><LinkOpcao linkOpcao={link}/></li>
    )
}

export default OpcaoLista;
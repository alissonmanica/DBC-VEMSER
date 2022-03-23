import OpcaoLista from "./OpcoesDaLista"
import styles from "./Lista.module.css"


const Lista = () => {
    return (
        <ul className={styles.ul}>
            <OpcaoLista link="Home" />
            <OpcaoLista link="Sobre" />
            <OpcaoLista link="Contato" />
        </ul>
    )
}

export default Lista;
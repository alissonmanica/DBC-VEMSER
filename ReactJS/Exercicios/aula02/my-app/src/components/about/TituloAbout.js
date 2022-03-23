import styles from "./About.module.css"

const Titulo = ({titulo}) => {
    return (
        <h1 className={styles.titulo}>{titulo}</h1>
    )
}

export default Titulo;
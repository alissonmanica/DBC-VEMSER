import styles from "./Lista.module.css"

const LinkOpcao = ({linkOpcao}) => {
    return (
        <a className={styles.a} href="#">{linkOpcao}</a>
    )
}

export default LinkOpcao;
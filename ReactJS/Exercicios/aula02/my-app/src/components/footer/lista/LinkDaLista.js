import styles from "./Lista.module.css"

const LinkLista = ({link}) => {
    return (
        <a className={styles.a} href="#">{link}</a>
    )
}

export default LinkLista;
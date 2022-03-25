import styles from "./Input.module.css"

function Mensagem ({para, msg, col, row, placeholder}) {
    return (
        <>
            <label  className={styles.mensagem} htmlFor={para}>{msg}</label>
            <textarea className={styles.caixote} name={para} id={para} cols={col} rows={row} placeholder={placeholder}></textarea>
        </>
    )
}

export default Mensagem;
import Options from "./Options"
import styles from "../Contact.module.css"

const Select = ({para, name, label}) => {
    return (
        <>
            <select className={styles.input} name={name} id={name}>
                <Options valor="q1" opcao="HTML e CSS é easy demais" />
                <Options valor="q2" opcao="JavaScript é easy demais" />
                <Options valor="q3" opcao="ReactJS é easy demais" />
            </select>
        </>
    )
}

export default Select;
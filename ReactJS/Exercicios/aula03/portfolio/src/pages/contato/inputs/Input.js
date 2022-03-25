import styles from "./Input.module.css"

function Input({para, label, tipo, placeholder, valor, propFuncao}) {
    return (
        <div>
            <label className={styles.inputLabel} htlmFor={para}>{label}</label>
            <input className={styles.caixote} type={tipo} name={para}  placeholder={placeholder} value={valor} onChange={(e) => propFuncao(e.target.value)} />
        </div>
    )
   }

   export default Input;
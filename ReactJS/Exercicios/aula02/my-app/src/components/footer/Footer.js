import Endereco from "./Endereco";
import Lista from "./lista/Lista"
import styles from "./Footer.module.css"


const Footer = () => {
    return (
        <nav className={styles.footer}>
            <Lista />
            <Endereco end="AV.Andarai 531 - Porto Alegre" />
        </nav>
    )
}

export default Footer;
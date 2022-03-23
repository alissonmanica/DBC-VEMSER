import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import styles from "./Header.module.css"
import TituloHeader from "./TituloHeader";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo />
                <TituloHeader titulo="Melhores alunos do Vem Ser de todos os tempos" />
            </div>
            <Menu />
        </header>
    )
}

export default Header;
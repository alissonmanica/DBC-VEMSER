import logo from '../../../images/cogumelo.jpg'
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <img className={styles.img} src={logo} alt="logo-cogumelo" />
    )
}

export default Logo;
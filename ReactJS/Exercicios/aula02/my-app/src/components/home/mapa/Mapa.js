import TituloEndereco from "./TituloEndereco";
import styles from "./Mapa.module.css"

const Mapa = () => {
    return (
        <div className={styles.div}>
            <TituloEndereco titulo="Endereço da DBC"/>
            <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27642.167568800756!2d-51.19245626446533!3d-30.00037554792446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1648016475291!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}

export default Mapa;
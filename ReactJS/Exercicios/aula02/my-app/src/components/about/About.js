import Artigo from "./artigo/Artigo"
import Titulo from "./TituloAbout"
import Video from "./VideoAbout"
import styles from "./About.module.css"


const About = () => {
    return (
        <div className={styles.about}>
            <Titulo titulo="Sobre a DBC" />
            <Video />
            <Artigo />
        </div>
    )
}

export default About;
import Artigo from "./artigo/Artigo";
import Cards from "./cards/Cards";
import Mapa from "./mapa/Mapa";
import TituloHome from "./TituloHome";
import styles from "./Home.module.css"


const Home = () => {
    return (
        <div className={styles.div}>
            <TituloHome titulo="Estamos aprendendo React JS com o melhor professor de todos" />
            <div className={styles.divCards}>
                <Cards className={styles.card} descricao="Player1" />
                <Cards className={styles.card} descricao="Player2" />
                <Cards className={styles.card} descricao="Player3" />
            </div>
                <Artigo />
                <Mapa />
        </div>
    )
}

export default Home;
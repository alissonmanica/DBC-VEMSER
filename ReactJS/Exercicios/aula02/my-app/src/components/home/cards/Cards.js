import DescricaoCard from "./DescricaoCard";
import ImagemCard from "./imagemcard/ImagemCard"
import styles from "./Cards.module.css"

const Cards = ({descricao}) => {
    return (
        <div className={styles.card}>
            <ImagemCard />
            <DescricaoCard desc={descricao}/>
        </div>
    )
}

export default Cards;
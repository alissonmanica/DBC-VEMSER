import Imagem from "../../../../images/cogumelo.jpg"
import styles from "./ImagemCard.module.css"

const ImagemCard = ({desc}) => {
    return (
        <img className={styles.img} src={Imagem} alt="cogumelo" />
    )
}

export default ImagemCard;
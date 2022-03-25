import styles from "./Perfil.module.css";
import { FaConnectdevelop } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


function Perfil({data}) {
    const {avatar_url ,name, bio, company, location} = data
    return (
    <div className={styles.perfil}>
        <div>
            <img className={styles.img} src={avatar_url} alt="imagem-perfil"/>
            <div className={styles.desc}>
                <p><FaConnectdevelop className={styles.icon} />{company}</p>
                <p><FaMapMarkerAlt className={styles.icon} />{location}</p>
            </div>
        </div>
        <div className={styles.name}>
            <h1>{name}</h1>
            <div>
                <h3 className={styles.h3}>{bio}</h3>
            </div>
        </div>
    </div>
    );
}

export default Perfil;
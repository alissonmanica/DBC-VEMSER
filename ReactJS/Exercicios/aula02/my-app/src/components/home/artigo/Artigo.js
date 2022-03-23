import Paragrafo from "./Paragrafo";
import styles from "./Artigo.module.css"

const Artigo = () => {
    return (
        <article className={styles.artigo}>
            <Paragrafo paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium ipsa non nisi, mollitia, doloribus voluptatibus aliquam veritatis voluptate sequi labore asperiores! Id obcaecati enim omnis placeat aperiam quo nobis tenetur, sapiente saepe nulla pariatur ab adipisci nam labore assumenda dolor praesentium, nesciunt suscipit unde aliquid, hic veritatis asperiores! Enim autem voluptatibus eaque harum ipsam nesciunt labore obcaecati eligendi doloribus fugiat, reiciendis ea id nemo earum maiores quam minima laborum explicabo provident qui necessitatibus adipisci inventore impedit error. Ipsam nulla doloremque tempore officiis, quod debitis error minus nisi architecto dolor veritatis distinctio ipsum repellendus suscipit? Facere autem omnis delectus inventore." />
            
            <Paragrafo paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non sequi alias, numquam aliquid asperiores libero voluptate maxime eos minus quidem odit incidunt sint possimus molestias soluta et obcaecati architecto ipsa aspernatur corporis vel recusandae culpa dolores? Inventore at recusandae impedit. Accusamus atque corporis eos corrupti fugiat libero alias maxime, eveniet, aspernatur magni, asperiores sit? Voluptatibus debitis dolores a eos corrupti natus omnis voluptate repudiandae, vel architecto, rerum, quae veniam!" />
        </article>
    )
}

export default Artigo;
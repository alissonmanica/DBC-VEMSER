import Paragrafo from "./Paragrafo"
import styles from "./Artigo.module.css"

const Artigo = () => {
    return (
        <article className={styles.artigo}>
            <Paragrafo desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, officiis. Maxime sit vel mollitia repellendus quasi tenetur rem aperiam nobis animi molestias ex ducimus omnis repudiandae consequatur iste vero ea illo rerum perferendis perspiciatis quisquam, veniam eligendi. Mollitia, at culpa ullam, tempora consequuntur placeat exercitationem voluptatum aspernatur omnis nisi ea. Ratione recusandae, eligendi explicabo, sed tempore dolor illo quas commodi eveniet dolorem adipisci? Error fugit est laborum fugiat dicta veritatis? Ipsa culpa sint quaerat nulla quod, minus dolores enim cupiditate debitis laborum illum nostrum neque ipsum quas aliquam deserunt repudiandae velit voluptatem inventore id eos. Ullam soluta ipsam ratione dolorem." />

            <Paragrafo desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, officiis. Maxime sit vel mollitia repellendus quasi tenetur rem aperiam nobis animi molestias ex ducimus omnis repudiandae consequatur iste vero ea illo rerum perferendis perspiciatis quisquam, veniam eligendi. Mollitia, at culpa ullam, tempora consequuntur placeat exercitationem voluptatum aspernatur omnis nisi ea. Ratione recusandae, eligendi explicabo, sed tempore dolor illo quas commodi eveniet dolorem adipisci? Error fugit est laborum fugiat dicta veritatis? Ipsa culpa sint quaerat nulla quod, minus dolores enim cupiditate debitis laborum illum nostrum neque ipsum quas aliquam deserunt repudiandae velit voluptatem inventore id eos. Ullam soluta ipsam ratione dolorem." />
        </article>
    )
}

export default Artigo;
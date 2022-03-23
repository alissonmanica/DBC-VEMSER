import styles from "./About.module.css"

const Video = () => {
    return (
        <iframe className={styles.video} src="https://www.youtube.com/embed/h9HiHkEar-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}

export default Video;
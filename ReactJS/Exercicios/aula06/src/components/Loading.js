import loading from '../images/LoadingGif.gif'
import style from './Loading.module.css'

function Loading() {
  return (
    <div className={style.loading}>
        <img src={loading} alt="Loading" />
        <h1>Loading...</h1>
    </div>
  )
}

export default Loading
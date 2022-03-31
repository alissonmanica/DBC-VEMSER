import error from '../images/ErrorGif.gif'
import style from './Error.module.css'

function Error() {
  return (
    <div className={style.error}>
        <img src={error} alt="Error" />
        <h1>Error!!!</h1>
    </div>
  )
}

export default Error
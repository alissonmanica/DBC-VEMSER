const Mensagem = ({para, msg, col, row, placeholder}) => {
    return (
        <>
            <label htmlFor={para}>{msg}</label>
            <textarea name={para} id={para} cols={col} rows={row} placeholder={placeholder}></textarea>
        </>
    )
}

export default Mensagem;
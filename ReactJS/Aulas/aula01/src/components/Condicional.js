const Condicional = () => {
    const nome = true;
    return (
        <div>
            {nome && <h1>Condicional</h1>}
            {nome ? <h1>Condicional</h1> : <h1>sem condicional</h1>}
        </div>
    )
}

export default Condicional;
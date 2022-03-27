const Input = ({type, name, placeholder, value, changeProp}) => {
    return (
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={(e) => changeProp(e.target.value)} />
    )
}

export default Input;
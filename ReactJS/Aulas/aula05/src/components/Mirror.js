import {useContext} from 'react';
import {CountContext} from '../context/CountContext'

function Mirror() {
    const {count} = useContext(CountContext)
    return (<h1>espelho: {count}</h1>)
}

export default Mirror;
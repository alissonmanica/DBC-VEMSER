import {useEffect, useState} from 'react';
import axios from 'axios';

function Inicial() {
    async function setup() {
        const {data} = await axios.get('https://api.github.com/users/alissonmanica');
        console.log(teste);
    }

    useEffect(() => {
        setup();
    }, []);
    return (<div></div>);
}

export default Inicial;
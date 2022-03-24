import {useEffect, useState} from 'react';
import axios from 'axios';

function Perfil() {
    const [userFoto, setUserFoto] = useState()
    const [userName, setUserName] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userBio, setUserBio] = useState()
    const [userCompany, setUserCompany] = useState()
    const [userLocation, setUserLocation] = useState()


    async function setup() {
        const {data} = await axios.get('https://api.github.com/users/alissonmanica');
        setUserFoto(data.avatar_url)
        setUserName(data.name)
        setUserEmail('alissonmanica.aai@gmail.com')
        setUserBio(data.bio)
    }
    
    
    useEffect(() => {
        setup();
    }, []);
    return (
    <div>
        <div>
        <img src={userFoto} alt="imagem-perfil" />
        </div>
        <div>
            {userName}
            {userBio}
        </div>
    </div>
    );
}

export default Perfil;
import styles from "./Repositorio.module.css";
import {useEffect, useState} from 'react';

function Repositorio({repos}) {
   
console.log(repos)
    return (
        <div className={styles.reposPage}>
            <h1>Repositórios</h1>
            {repos.length && repos.map(item => (
               <div key={item.id} className={styles.reposInfo}>
                  <span>{item.name}<p><a href={item.html_url}>{item.html_url}</a></p></span>
                </div>
            ))}    
        </div>
    )
}

export default Repositorio;
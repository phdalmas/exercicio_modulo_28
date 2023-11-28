import { useEffect, useState } from 'react';

import styles from './Header.module.css';

function Header() {

    const [nome, setNome] = useState()

    useEffect(() => {
        setNome(prompt('Digite seu nome'))
    }, [])

    return (
        <div className='container'>
            <div>
                <h2 className={styles.title}>Olá, <span className={styles.userName}>{nome}</span> vamos calcular seu IMC?</h2>
            </div>
        </div>
    )
}

export default Header
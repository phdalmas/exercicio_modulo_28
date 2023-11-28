import styles from './Resultado.module.css';

function Resultado({ resultado }) {

    return (
        <div className='container'>
            <div>
                <p className={styles.calcResult}>SEU IMC: {resultado}</p>
            </div>
        </div>
    )
}

export default Resultado;
import styles from './Tabela.module.css';

function Tabela({ resultado }) {

    function magreza() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>MENOR QUE 18,5</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>MAGREZA</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente} ${styles.textCenter}`}>0</td>
            </>
        )
    }

    function normal() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>ENTRE 18,5 E 24,9</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>NORMAL</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente} ${styles.textCenter}`}>0</td>
            </>
        )
    }

    function sobrepeso() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>ENTRE 25,0 E 29,9</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>SOBREPESO</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente} ${styles.textCenter}`}>I</td>
            </>
        )
    }

    function obesidade() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>ENTRE 30,0 E 39,9</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>OBESIDADE</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente} ${styles.textCenter}`}>II</td>
            </>
        )
    }

    function obesidadeGrave() {
        return (
            <>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>MAIOR QUE 40,0	</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente}`}>OBESIDADE GRAVE	</td>
                <td className={`${styles.tableCalcText} ${styles.resultadoCorrespondente} ${styles.textCenter}`}>III</td>
            </>
        )
    }

    return (
        <div className='container'>
            <table className={styles.tableCalc}>
                <thead className={styles.headerTable}>
                    <tr>
                        <th colSpan={3}>Veja a interpretação do IMC </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.tableCalcTitle}>IMC</td>
                        <td className={styles.tableCalcTitle}>CLASSIFICAÇÃO</td>
                        <td className={styles.tableCalcTitle}>OBESIDADE (GRAU)</td>
                    </tr>
                    <tr>
                        {
                            resultado < 18.5 ? magreza() :
                                <>
                                    <td className={styles.tableCalcText}>MENOR QUE 18,5</td>
                                    <td className={styles.tableCalcText}>MAGREZA</td>
                                    <td className={styles.textCenter}>0</td>
                                </>
                        }
                    </tr>
                    <tr>
                        {
                            resultado >= 18.5 && resultado <= 24.9 ? normal() :
                                <>
                                    <td className={styles.tableCalcText}>ENTRE 18,5 E 24,9</td>
                                    <td className={styles.tableCalcText}>NORMAL</td>
                                    <td className={styles.textCenter}>0</td>
                                </>
                        }
                    </tr>
                    <tr>
                        {
                            resultado >= 25 && resultado <= 29.9 ? sobrepeso() :
                                <>
                                    <td className={styles.tableCalcText}>ENTRE 25,0 E 29,9</td>
                                    <td className={styles.tableCalcText}>SOBREPESO</td>
                                    <td className={styles.textCenter}>I</td>
                                </>
                        }
                    </tr>
                    <tr>
                        {
                            resultado >= 30 && resultado <= 39.9 ? obesidade() :
                                <>
                                    <td className={styles.tableCalcText}>ENTRE 30,0 E 39,9</td>
                                    <td className={styles.tableCalcText}>OBESIDADE</td>
                                    <td className={styles.textCenter}>II</td>
                                </>
                        }
                    </tr>
                    <tr>
                        {
                            resultado >= 40 ? obesidadeGrave() :
                                <>
                                    <td className={styles.tableCalcText}>MAIOR QUE 40,0	</td>
                                    <td className={styles.tableCalcText}>OBESIDADE GRAVE	</td>
                                    <td className={styles.textCenter}>III</td>
                                </>
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;
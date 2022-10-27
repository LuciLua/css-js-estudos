import styles from '../styles/page2.module.scss'

function Page2() {

    // page 2 smartphone cube sound and visual
    function tocar() {
        new Audio('/camSound.mp3').play();
        document.getElementById('interno').classList.toggle('interno2')
    }


    return (
        <div className={styles.black200}>
            <div className={styles.retangle}>
                <button className={styles.btnc} onClick={() => tocar()}>
                    <img src="/camera.svg" alt="" />
                    <audio id="cam" src="/camSound.mp3"></audio>
                </button>
                <div className={styles.interno} id="interno">
                    <div className={styles.floor}></div>
                    <div className={styles.cube}>
                        <div className={styles.front}></div>
                        <div className={styles.back}></div>
                        <div className={styles.left}></div>
                        <div className={styles.right}></div>
                        <div className={styles.top}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Page2
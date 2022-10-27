import styles from '../styles/page3.module.scss'

function Page3() {
    return (


        <div className={styles.cards2}>
            <div className={styles.card}>
                <h2 data-attr="Title: " >Card</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className={styles.btns}>
                    <button>Read more</button>
                    <button>Botão</button>
                </div>
            </div>
            <div className={styles.card}>
                <h2 data-attr="Title: " >Card</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className={styles.btns}>
                    <button>Read more</button>
                    <button>Botão</button>
                </div>
            </div>
            <div className={styles.card}>
                <h2 data-attr="Title: " >Card</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className={styles.btns}>
                    <button>Read more</button>
                    <button>Botão</button>
                </div>
            </div>
        </div>
    )
}

export default Page3
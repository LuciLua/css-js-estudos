import styles from '../styles/page1.module.scss'

function Page1() {
    return (
        <div className={styles.flexbox}>
            <div className={styles.left}>
            </div>
            <div className={styles.right}>
                <div className={styles.top}>
                    <ul>
                        <li>Primeiro Item</li>
                        <li>Segundo Item</li>
                    </ul>
                </div>
                <div className={styles.bottom}>
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt impedit asperiores quia recusandae
                        libero earum amet laboriosam aliquam ipsam eligendi, error dolor perspiciatis nulla ex quisquam, aut
                        consectetur ducimus. Molestias!</p>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <p>Lorem ipsum dolor sit</p>
                            <h1>$100</h1>
                        </div>
                        <div className={styles.card}>
                            <p>Lorem ipsum dolor sit</p>
                            <h1>$200</h1>
                        </div>
                        <div className={styles.card}>
                            <p>Lorem ipsum dolor sit</p>
                            <h1>$300</h1>
                        </div>
                        <div className={styles.card}>
                            <p>Lorem ipsum dolor sit</p>
                            <h1>$500</h1>
                        </div>
                    </div>
                    <button>Click-me</button>
                </div>
            </div>
        </div>
    )
}

export default Page1
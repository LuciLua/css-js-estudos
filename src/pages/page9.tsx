import styles from '../styles/page9.module.scss'

function Page9() {
    return (
        <div className={styles.cardFigma}>
            <header>
                <img src="/card.svg" alt="" />
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </header>
            <main>
                <h1>Tests Card FigmaSVG Export</h1>
            </main>
            <footer>
                <svg width="350" height="48" viewBox="0 0 350 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.832808L80.7238 12.611C125.722 19.1766 171.377 19.9455 216.571 14.8991L350 0V47C350 47.5523 349.552 48 349 48H6.99999C3.134 48 0 44.866 0 41V0.832808Z" fill="#b15dfb" />
                </svg>
            </footer>
        </div>

    )
}


export default Page9
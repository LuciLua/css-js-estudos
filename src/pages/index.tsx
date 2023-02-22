import styles from '../styles/home.module.scss'

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.test}>
                <h1>Treinando CSS e JS 😎</h1>
            </div>
            <div className={styles.line} />
            <ul className={styles.pages}>
                <li><a href="/page1">Página 1 | Landing</a></li>
                <li><a href="/page2">Página 2 | SmartphoneCube</a></li>
                <li><a href="/page3">Página 3 | Cards</a></li>
                <li><a href="/page4">Página 4 | Formulário</a></li>
                <li><a href="/page5">Página 5 | Triângulos</a></li>
                <li><a href="/page6">Página 6 | Nickname</a></li>
                <li><a href="/page7">Página 7 | Card JS</a></li>
                <li><a href="/page8">Página 8 | Array</a></li>
                <li><a href="/page9">Página 9 | Figma</a></li>
                <li><a href="/page10">Página 10 | vh vs dvh</a></li>
            </ul>
            <div className='line' />
        </div>
    )
}

export default Home
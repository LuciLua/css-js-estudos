import styles from './Menu.module.scss'

function Menu() {
    return (
        <div className={styles.menu}>
            <ul>
                <li><a data-ico="" href="/">Home</a></li>
                <li><a href="/page1">page1</a></li>
                <li><a href="/page2">page2</a></li>
                <li><a href="/page3">page3</a></li>
                <li><a href="/page4">page4</a></li>
                <li><a href="/page5">page5</a></li>
                <li><a href="/page6">page6</a></li>
                <li><a href="/page7">page7</a></li>
                <li><a href="/page8">page8</a></li>
                <li><a href="/page9">page9</a></li>
            </ul>
        </div>
    )
}

export default Menu
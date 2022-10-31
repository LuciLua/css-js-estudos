import styles from './Menu.module.scss'

function Menu() {

    function openMenu() {
        var menu = document.querySelector(`.${styles.menu}`)
        var active = `${styles.active}`

        menu.classList.contains(active) ? menu.classList.remove(active) : menu.classList.add(active)
    }

    return (
        <div className={styles.menu} onClick={() => openMenu()}>
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
            <div className={styles.close}>Clique em qualquer area para fechar ❌</div>
        </div>
    )
}

export default Menu
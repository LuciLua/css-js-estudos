import styles from "./Main.module.scss"

function Main({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Main
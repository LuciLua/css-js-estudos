import Menu from "../components/Menu/Menu"
import '../styles/globals.scss'

function App({ Component, pageProps }) {
    return (
        <div className="wrap">
            <Menu />
            <Component {...pageProps} />
        </div>
    )
}

export default App
import Main from "../components/Main/Main"
import Menu from "../components/Menu/Menu"
import '../styles/globals.scss'

function App({ Component, pageProps }) {
    return (
        <div className="wrap">
            <Menu />
            <Main>
                <Component {...pageProps} />
            </Main>
        </div>
    )
}

export default App
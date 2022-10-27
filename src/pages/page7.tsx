import styles from '../styles/page7.module.scss'

function Page7() {
    
    function criar() {
        var cartao = document.querySelectorAll(`${styles.cartao}`)
        Array.from(cartao).map(function (elemento, indice, arrayBase) {

            const conteudo = elemento.querySelector('h3').textContent;

            const cor = getComputedStyle(elemento).backgroundColor

            const passw = document.getElementById('pass')

            const num = document.querySelector(`${styles.num}`).value

            console.log({ conteudo: conteudo, cor: cor, font: getComputedStyle(elemento).fontFamily, password: passw.value, numero: num })

        })

        var p = document.getElementById('p')
        var q = document.getElementById('q')

        p.innerHTML = Array.from(cartao).length + "Cartões encontrados!"

        var passw = document.getElementById('pass')

        const num = document.querySelector(`${styles.num}`)

        q.innerHTML = "não digite senhas em qualquer lugar! Você digitou: " + passw.value + "<br> Número escolhido: " + num.value

    }
    return (
        <div className={styles.content} id="content">
            <div className={styles.cartao}>
                <form action="">
                    <h3>Hi, I'm card! And also a keyboard &#127929</h3>
                    <fieldset style={{ 'border': 'none' }}>
                        <input type="password" name="" id="pass" value="" autoComplete="new-password" />
                        <input type="number" name="" id="" placeholder="number" className={styles.num} />
                    </fieldset>
                </form>
            </div>
            <button className={styles.btnS} type="button" onClick={() => criar()}>Clique</button>
            <p id="p"></p>
            <p id="q"></p>
        </div>

    )
}


export default Page7
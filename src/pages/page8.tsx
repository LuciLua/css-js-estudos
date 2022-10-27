import styles from '../styles/page8.module.scss'

function Page8() {

    const frutas = ['pera', 'maçã', 'banana', 'abacate', 'pêssego', 'banana', 'uva', 'pera', 'pera', 'maçã', 'pera', 'abacate', 'melancia']
    const biscoitos = ['povilho', 'creme', 'social', 'negresco', 'nesfit']

    function mecanism() {
        var search = document.querySelector('.searchHere').value
        var resultado = document.querySelector('.result')

        var x = document.getElementsByClassName('box-result'); //elemnto pai                           
        var content = '';

        if ((frutas.filter(frutas => frutas === search).length) <= 0) {
            var texto = document.createTextNode(`nada encontrado`)
            resultado.textContent = 'digite algo, por favor'
        }
        else {
            var texto = document.createTextNode(`${frutas.filter(frutas => frutas === search)}`)
            resultado.textContent = (frutas.filter(frutas => frutas === search).length) + (` ${search.toUpperCase()}S ENCONTRADOS`)
        }

        var div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = content;

        x[0].appendChild(div);
        div.appendChild(texto)
    }

    function clear() {
        var cards = document.querySelectorAll('.card')

        alert(cards.length, 'ola')

        for (let i = 0; i < cards.length; i++) {
            cards[i].remove()
        }
    }

    // document.querySelector('.array').textContent = frutas
    // document.querySelector('.array2').textContent = biscoitos
    // document.querySelector('.map').textContent = frutas.map(frutas => biscoitos[0])
    // document.querySelector('.filter').textContent = (frutas.filter(frutas => frutas === 'banana').length) + ' bananas'
    // document.querySelector('.filter2').textContent = (frutas.filter(frutas => frutas === 'maçã').length) + ' maçã'
    // document.querySelector('.filter3').textContent = (frutas.filter(frutas => frutas === 'pera').length) + ' peras'
    // document.querySelector('.filter4').textContent = (frutas.filter(frutas => frutas === 'caju').length) + ' cajus'
    // document.querySelector('.find').textContent = biscoitos.find(biscoitos => biscoitos === "negresco")

    return (

        <div className={styles.callback}>
            <div className={styles.arrays}>
                <p>Fruits: </p><span className={styles.array}></span>
                <p>Cookies: </p><span className={styles.array2}></span>
            </div>
            <div className="line"></div>
            <div className={styles.boxin2}>
                <br />
                <p>Search fruits</p>
                <input type="text" placeholder="Search here" className={styles.searchHere} />
                <button onClick={() => mecanism()}> Search</button>
                <button onClick={() => {
                    var cards = document.querySelectorAll('.card')
                    for (let i = 0; i < cards.length; i++) {
                        cards[i].remove()
                    }
                }}>Clear</button>
                <span className={styles.result}></span>
                <div className={styles.outResult}>
                    <div className={styles.boxresult}>
                    </div>
                </div>
                <div className="line"></div>
                <p>map:</p><span className={styles.map}></span>
                <p>filter 1:</p><span className={styles.filter}></span>
                <p>filter 2:</p><span className={styles.filter2}></span>
                <p>filter 3:</p><span className={styles.filter3}></span>
                <p>filter 4:</p><span className={styles.filter4}></span>
                <p>find:</p><span className={styles.find}></span>
                <br />
            </div>
        </div>
    )
}


export default Page8
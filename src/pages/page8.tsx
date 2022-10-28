import styles from '../styles/page8.module.scss'

function Page8() {

    const frutas = ['pera', 'maçã', 'banana', 'abacate', 'pêssego', 'banana', 'uva', 'pera', 'pera', 'maçã', 'pera', 'abacate', 'melancia']
    const biscoitos = ['povilho', 'creme', 'social', 'negresco', 'nesfit']

    // function mecanism() {
    //     var search = document.querySelector('.searchHere').value
    //     var resultado = document.querySelector('.result')

    //     var x = document.getElementsByClassName('box-result'); //elemnto pai                           
    //     var content = '';

    //     if ((frutas.filter(frutas => frutas === search).length) <= 0) {
    //         var texto = document.createTextNode(`nada encontrado`)
    //         resultado.textContent = 'digite algo, por favor'
    //     }
    //     else {
    //         var texto = document.createTextNode(`${frutas.filter(frutas => frutas === search)}`)
    //         resultado.textContent = (frutas.filter(frutas => frutas === search).length) + (` ${search.toUpperCase()}S ENCONTRADOS`)
    //     }

    //     var div = document.createElement('div');
    //     div.setAttribute('class', 'card');
    //     div.innerHTML = content;

    //     x[0].appendChild(div);
    //     div.appendChild(texto)
    // }

    // function clear() {
    //     var cards = document.querySelectorAll('.card')

    //     alert(cards.length, 'ola')

    //     for (let i = 0; i < cards.length; i++) {
    //         cards[i].remove()
    //     }
    // }

    // document.querySelector('.array').textContent = frutas
    // document.querySelector('.array2').textContent = biscoitos
    // document.querySelector('.map').textContent = frutas.map(frutas => biscoitos[0])
    // document.querySelector('.filter').textContent = (frutas.filter(frutas => frutas === 'banana').length) + ' bananas'
    // document.querySelector('.filter2').textContent = (frutas.filter(frutas => frutas === 'maçã').length) + ' maçã'
    // document.querySelector('.filter3').textContent = (frutas.filter(frutas => frutas === 'pera').length) + ' peras'
    // document.querySelector('.filter4').textContent = (frutas.filter(frutas => frutas === 'caju').length) + ' cajus'
    // document.querySelector('.find').textContent = biscoitos.find(biscoitos => biscoitos === "negresco")

    return (

        <div className={styles.container}>
            <div className={styles.fruits}>
                <div className={styles.fruit}>
                    <div className={styles.name}>Uva</div>
                    <div className={styles.percent}>
                        <div className={styles.value}>70%</div>
                    </div>
                </div>
                <div className={styles.fruit}>
                    <div className={styles.name}>Maçã</div>
                    <div className={styles.percent}>
                        <div className={styles.value}>20%</div>
                    </div>
                </div>
                <div className={styles.fruit}>
                    <div className={styles.name}>Banana</div>
                    <div className={styles.percent}>
                        <div className={styles.value}>81%</div>
                    </div>
                </div>
            </div>
            <input type="text" placeholder='fruit' />
        </div>
    )
}


export default Page8
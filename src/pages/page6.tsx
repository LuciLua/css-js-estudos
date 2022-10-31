import styles from '../styles/page6.module.scss'

function Page6() {


    // function teste() {

    //     var seuNome = document.getElementById('seunome')
    //     var seuNomeResult = document.getElementById('seunomeresult')

    //     const nomeCurto1 = seuNome.value

    //     if (seuNome.value.length > 5) {
    //         seuNomeResult.value = nomeCurto1;
    //     } if (seuNome.value.length < 6) {
    //         seuNomeResult.value = 'Nome muito curto';
    //     } if (seuNome.value.length > 12) {
    //         seuNomeResult.value = 'Nome muito grande'
    //     }

    //     switch (seuNome.value) {
    //         case 'lucilua81':
    //             seuNomeResult.value = 'Olá luci'
    //             break
    //         case 'lolalola81':
    //             seuNomeResult.value = 'Olá lola'
    //             break
    //     }
    // }

    return (
        <div className={styles.callback}>
            <p>tente lucilua81 ou lolalola81</p>
            <p>Falhou</p>
            <br />
            <div className={styles.boxin}>
                <input type="text" name="" id="seunome" placeholder="seuNome" />
                {/* <input type="text" name="" id="seunome" placeholder="seuNome"  onInput={() => teste()} /> */}
                <input type="text" name="" id="seunomeresult" placeholder="seuNomeResult" value="" />
            </div>
            <br />
        </div>

    )
}

export default Page6
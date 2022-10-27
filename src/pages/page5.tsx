import styles from "../styles/page5.module.scss"

function Page5() {
    // function triangulo(){

    //     var ladoA = document.getElementById('ladoA').value
    //     var ladoB = document.getElementById('ladoB').value
    //     var ladoC = document.getElementById('ladoC').value
    
    //     var result = document.getElementById('resulTri')
    //     console.log('equilatero')

    
    //     if (ladoA === ladoB &&  ladoB === ladoC){
    //         return result.textContent = 'Equilátero'
    //     }
    //     else if((ladoA === ladoC && ladoA != ladoB) || (ladoB === ladoC && ladoC != ladoA) || (ladoA === ladoB && ladoB != ladoC) ){
    //         return result.textContent = 'Isósceles'
    //     }
    //     else{
    //         return result.textContent = 'Escaleno'
    //     }
    // }
    function triangulo(){
        console.log("Fix it!")
    }
    
    return (
        <div className={styles.triangulosbox}>
            <div className={styles.triangulos}>
                <h2>Triangulos</h2>
                <label htmlFor="ladoA">ladoA</label>
                <input onInput={() => triangulo()} type="number" id="ladoA" />
                <br />
                <label htmlFor="ladoB">ladoB</label>
                <input onInput={() => triangulo()} type="number" id="ladoB" />
                <br />
                <label htmlFor="ladoC">ladoC</label>
                <input onInput={() => triangulo()} type="number" id="ladoC" />
            </div>
            <div className={styles.triD}>
                <h3 id="resulTri"></h3>
            </div>
        </div>
    )
}

export default Page5
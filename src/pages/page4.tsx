import styles from '../styles/page4.module.scss'

function Page4() {
    return (
        <>
            <div className={styles.line} />
            <div className={styles.form}>
                <form action="" method="POST">
                    <div className={styles.colg}>
                        <div className={styles.col}>
                            <label htmlFor='name'>Your name</label>
                            <input type="text" name="name" placeholder="Your name" id="name" />
                        </div>

                        <div className="col">
                            <label htmlFor="surname">Your surname</label>
                            <input type="text" name="surname" placeholder="Your surname" id="surname" />
                        </div>

                        <div className="col">
                            <label htmlFor="occupation">Your Occupation</label>
                            <input type="text" name="occupation" placeholder="Your occupation" id="occupation" />
                        </div>
                    </div>
                    <div className={`${styles.col} ${styles.skills}`}>
                        <label htmlFor="skills">Your skills</label>

                        <input data-skill="HTML" type="checkbox" name="skills" id="html" />
                        <input data-skill="CSS" type="checkbox" name="skills" id="css" />
                        <input data-skill="JavaScript" type="checkbox" name="skills" id="js" />
                        <input data-skill="Typescript" type="checkbox" name="skills" id="ts" />
                        <input data-skill="Python" type="checkbox" name="skills" id="py" />
                        <input data-skill="Java" type="checkbox" name="skills" id="java" />
                        <input data-skill="C++" type="checkbox" name="skills" id="c" />
                        <input data-skill="Outra(s)" type="checkbox" name="skills" id="o" />

                        <textarea name="" id="textarea" cols={30} rows={10} placeholder="Outro"></textarea>
                    </div>
                    <br />
                    <button type="submit" style={{ height: '25px', 'width': '200px', 'position': 'relative' }} >Send</button>
                </form>

            </div>
            <div className='line'></div>
        </>

    )
}

export default Page4
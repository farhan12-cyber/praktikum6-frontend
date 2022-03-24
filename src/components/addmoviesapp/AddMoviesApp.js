import styles from "./AddMoviesApp.module.css";
function AddMoviesApp() {
    return (
        <div className={styles.container}>
            <div className={styles.Addmoviesapp__right}>
                <img
                  className={styles.form__image}
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                />
            </div>
    
            <div className={styles.Addmoviesapp__left}>
                <h2 className={styles.Addmoviesapp_notes}> Add Movie App</h2>
                
                <form action="/" method="">
                    <div className={styles.form__title}>
                        <label htmlFor="notes">Title Movie</label>
                        <input className={styles.form__teks} placeholder="insert your Tittle Movie" id="notes" type="text" />
                    </div>
    
                    <div className={styles.form__title}>
                        <label htmlFor="year">Year</label>
                        <input className={styles.form__teks} placeholder="insert your Years Movie" id="year" type="text" />
                    </div>
    
                    <button className={styles.form__btn} type="submit" >Submit</button>
                    <button className={styles.form__btn2} type="submit" >Cancel</button>
                </form>
            </div>
        </div>
        );    
}
export default AddMoviesApp;
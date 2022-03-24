import AddMoviesApp from "../components/addmoviesapp/AddMoviesApp";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import Navbar from "../components/navbar/Navbar";

function Main() {
    return(
        <div>
            <main>
                <Hero />
                <Movies />
                <AddMoviesApp />
            </main>
        </div>
    );
}

function Home() {
    return(
        <div>
        <Navbar/>
        <Main />
        <Footer />
        </div>
    );
}

export default Home;
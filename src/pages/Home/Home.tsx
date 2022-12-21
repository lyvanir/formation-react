import pikachu from "../../assets/images/pikachu-home.svg"
import style from "./Home.module.scss"

const Home = () => {

    return (
        <div className={`content-home ${style.container}`}>
            <div className={style.content}>
                <h1>Let's catch them all!</h1>
                <p> Pokémon is a media franchise that originally started out as an RPG video game, but due to its
                    popularity has managed to expand to other media entertainment such as TV series, movies, card games,
                    clothes, among others, becoming a brand that is recognized in the world market.
                </p>
                <a className="inter-bold btn-home" href="/search">Catch Pokemon</a>
            </div>
            <a href="/pokemon/pikachu">
                <img className={style.image} src={pikachu} alt="Pikachu"/>
            </a>
        </div>
    )
}

export default Home;
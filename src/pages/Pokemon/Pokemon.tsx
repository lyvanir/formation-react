import Result from "../../sections/Result/Result";
import {getPokemonById} from "../../api/pokemonApi";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPokemon} from "../../interfaces/Pokemon";

const Pokemon = () => {
    const {pokemon} = useParams();
    const [pokeData, setPokeData] = useState<IPokemon | null>(null);

    useEffect(() => {
        if (pokemon) {
            getPokemonById(pokemon).then(data => setPokeData(data));
        }
    }, []);

    return (
        <section className="container">
            {!!pokeData && <Result {...pokeData} />}
        </section>
    )
}

export default Pokemon;

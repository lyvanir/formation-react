import {useEffect, useState} from "react";
import {IPokemonResume} from "../../interfaces/Pokemon";
import {getAllPokemon} from "../../api/pokemonApi";
import PokeCard from "../../sections/PokeCard/PokeCard";
import SearchBar from "../../sections/SearchBar/SearchBar";
import useSearch from "../../hooks/useSearch";

const Search = () => {
    const [data, setData] = useState<{ previous: string, next: string, pokemonList: IPokemonResume[] }>({
        previous: "",
        next: "",
        pokemonList: []
    });
    const [pokemonList, setPokemonList] = useState<IPokemonResume[] | null>(null);

    const [search, setSearch] = useState<string>("");
    const filteredPokemon = useSearch(search);

    useEffect(() => {
        getAllPokemon().then(data => {
            setData(data);
            setPokemonList(data.pokemonList);
        });
    }, []);

    const handleLinks = (e: any, url: string) => {
        getAllPokemon(url).then(data => {
            setData(data);
            setPokemonList(data.pokemonList);
        });
    }

    return (
        <>
            <SearchBar searchCallback={(searchTerms) => setSearch(searchTerms)}/>

            <section className="container-card">
                {!!filteredPokemon?.length ?
                    filteredPokemon.map(pokemon =>
                        <PokeCard key={`card-${pokemon.name}`} {...pokemon} />
                    )
                    :
                    pokemonList?.length && pokemonList.map(pokemon =>
                        <PokeCard key={`card-${pokemon.name}`} {...pokemon} />
                    )
                }
            </section>

            <div className="btns-next-prev">
                <button onClick={(e) => handleLinks(e, data.previous)}
                        style={{visibility: data?.previous ? 'visible' : 'hidden'}}>
                    <svg className="w-6 h-6" width="24" height="24" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <span className="inter-medium">Previous</span>
                </button>
                <button onClick={(e) => handleLinks(e, data.next)}
                        style={{visibility: data?.next ? 'visible' : 'hidden'}}>
                    <span className="inter-medium">Next</span>
                    <svg className="w-6 h-6" width="24" height="24" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Search;
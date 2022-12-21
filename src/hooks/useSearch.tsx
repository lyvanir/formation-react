import {useEffect, useState} from "react";
import {searchPokemon} from "../api/pokemonApi";

const useSearch = (search: string) => {
    const [searchedPokemon, setSearchedPokemon] = useState<any[] | null>();

    useEffect(() => {
        if (!!search) {
            searchPokemon(search).then(list => {
                setSearchedPokemon(list);
            });
        }
    }, [search])

    return searchedPokemon;
}

export default useSearch;
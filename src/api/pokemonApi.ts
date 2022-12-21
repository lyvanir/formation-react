import {fetchService} from "./fetchService";
import {IPokemon} from "../interfaces/Pokemon";

async function getAllPokemon(url = 'https://pokeapi.co/api/v2/pokemon') {
    const response = await fetchService(url);

    const pokemonList = await Promise.all(
        response.data.results.map(async (item: any) => {
            const pokemon = await fetchService(item.url);
            return {
                number: pokemon.data.id,
                name: pokemon.data.name,
                avatar: pokemon.data.sprites.other.dream_world.front_default
            }
        })
    );

    return {previous: response.data.previous, next: response.data.next, pokemonList}
}

async function searchPokemon(terms: string) {
    const response = await fetchService(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000`);

    const filteredPokemon = response.data.results?.filter(
        (el: any) => el.name.toLowerCase().includes(terms.toLowerCase())
    );

    return await Promise.all(
        filteredPokemon.map(async (item: any) => {
            const pokemon = await fetchService(item.url);
            return {
                number: pokemon.data.id,
                name: pokemon.data.name,
                avatar: pokemon.data.sprites.other.dream_world.front_default
            }
        })
    );
}

async function getPokemonById(id: string): Promise<IPokemon> {
    const pokemon = await fetchService(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
        name: pokemon.data.name,
        avatar: pokemon.data.sprites.other.dream_world.front_default,
        weight: pokemon.data.weight,
        height: pokemon.data.height,
        types: pokemon.data.types.map((item: any) => item.type.name),
        abilities: pokemon.data.abilities.map((item: any) => item.ability.name),
        stats: pokemon.data.stats.map((item: any) => (
            {
                name: item.stat.name,
                value: item.base_stat
            }
        ))
    };
}

export {getAllPokemon, searchPokemon, getPokemonById};
interface IPokemon {
    name: string;
    avatar: string;
    weight: number;
    height: number;
    types: string[];
    abilities: string[];
    stats: { name: string, value: number }[];
}

interface IPokemonResume {
    number: number;
    name: string;
    avatar: string;
}

export type {IPokemon, IPokemonResume};
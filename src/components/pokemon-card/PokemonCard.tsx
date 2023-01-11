import {FC} from "react";

interface PokemonCardProps {
    name:string;
}


const PokemonCard: FC<PokemonCardProps> = ({name}) => {

    return <div>
        <h3>{name}</h3>
    </div>
}

export default PokemonCard;
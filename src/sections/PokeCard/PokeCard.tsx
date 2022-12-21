import {IPokemonResume} from "../../interfaces/Pokemon";

const pokemonCard = ({number,name,avatar}: IPokemonResume) => {

    const handleCard = (name: string) => {
        window.location.href=`/pokemon/${name}`;
    };

    return(
        <article className="content-card" onClick={()=>handleCard(name)}>
            <figure className="fig-card">
                <img src={avatar} alt={name} className="img-card" />
            </figure>
            <div className="inf-card">
                <h2 className="inter-bold name-card">{name}</h2>
                <h3 className="inter-medium number-card">#{number}</h3>
            </div>
        </article>
    )
}

export default pokemonCard
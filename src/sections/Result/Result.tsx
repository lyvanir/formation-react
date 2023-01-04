import {IPokemon} from "../../interfaces/Pokemon";

const Result = ({name, avatar, weight, height, types, abilities, stats}: IPokemon) => {

    const capitalizeFirstLetter = (name: string) => {
        // converting first letter to uppercase
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const convertWeight = (weight: number) => {
        /*
            hg * (1.0kg/10.0hg)
            hg*0.1
        */
        return (weight * 0.1).toFixed(2);
    };

    const convertHeight = (height: number) => {
        /*
            dm * (0.1m/1dg)
            dm*0.1
        */
        return (height * 0.1).toFixed(2);
    };

    const colorChange = (valor: number) => {
        if (valor <= 49) return "red"

        if (valor <= 79) return "yellow"

        return "green"
    };

    return (
        <section className="content-poke">
            <article className="box1-poke">
                <div className="poke-name">
                    <h1 className="inter-bold name-poke">{capitalizeFirstLetter(name)}</h1>
                    {types.map(type => (
                        <span key={`type-${type}`} className="inter-medium values-rectangle">
                            {capitalizeFirstLetter(type)}
                        </span>
                    ))}
                </div>
                <div className="physical">
                    <div>
                        <h3 className="inter-bold">Height:</h3>
                        <div>
                            <span className="inter-medium values-rectangle">{convertWeight(weight)} m</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="inter-bold">Weight:</h3>
                        <span className="inter-medium values-rectangle">{convertHeight(height)} kg</span>
                    </div>
                </div>
                <div className="group-abilities">
                    <h3 className="inter-bold">abilities:</h3>
                    <div className="abilities">
                        {abilities.map(ability => (
                            <span key={`type-${ability}`} className="inter-medium values-rectangle">
                                {capitalizeFirstLetter(ability)}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="inter-bold">Stats:</h3>
                    <div className="first-row-stats">
                        <div className="power">
                            <span
                                className={(`inter-medium values-round ${colorChange(stats[0].value)}`)}>{stats[0].value}</span>
                            <h4 className="inter-bold">HP</h4>
                        </div>
                        <div className="power">
                            <span
                                className={(`inter-medium values-round ${colorChange(stats[1].value)}`)}>{stats[1].value}</span>
                            <h4 className="inter-bold">Attack</h4>
                        </div>
                        <div className="power">
                            <span
                                className={(`inter-medium values-round ${colorChange(stats[2].value)}`)}>{stats[2].value}</span>
                            <h4 className="inter-bold">Defense</h4>
                        </div>
                    </div>
                    <div className="second-row-stats">
                        <div className="power">
                            <span
                                className={(`inter-medium values-round ${colorChange(stats[3].value)}`)}>{stats[3].value}</span>
                            <h4 className="inter-bold">Special Attack</h4>
                        </div>
                        <div className="power">
                            <span
                                className={(`inter-medium values-round ${colorChange(stats[4].value)}`)}>{stats[4].value}</span>
                            <h4 className="inter-bold">Special Defense</h4>
                        </div>
                        <div className="power">
                            <span
                                className={(`inter-medium values-round ${colorChange(stats[5].value)}`)}>{stats[5].value}</span>
                            <h4 className="inter-bold">Speed</h4>
                        </div>
                    </div>
                </div>
            </article>
            <article className="box2-poke">
                <img src={avatar} alt={name}/>
            </article>
        </section>
    )
}

export default Result
import reactLogo from './assets/react.svg'
import './App.css'
import PokemonCard from "./components/pokemon-card/PokemonCard";

function App() {
    return (
        <div className="App">
            <h1>Mes pokemons</h1>
            <div>
                <PokemonCard name={"TEST"} />
            </div>
        </div>
    )
}

export default App

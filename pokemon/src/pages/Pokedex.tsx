import { useLoaderData } from "react-router-dom";
import PokemonList from "../components/PokemonList/PokemonList";
import { IPokemon } from "../models";

const Pokedex = () => {
    const pokemons = useLoaderData() as IPokemon[];

    return  <div>
        <h1>Pokedéx</h1>
        <PokemonList pokemons={pokemons}/>
    </div>
}

export default Pokedex;
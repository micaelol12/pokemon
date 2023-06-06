import { IPokemon } from "../../models"
import PokemonInfo from "../PokemonInfo/PokemonInfo"
import styles from './PokemonList.module.css'

const PokemonList: React.FC<{pokemons: IPokemon[]}> = ({pokemons}) => {
    return <ul className={styles.list}>
        {pokemons.map(pokemon => <PokemonInfo name={pokemon.name}/>)}
    </ul>
}

export default PokemonList
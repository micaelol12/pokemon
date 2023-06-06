import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "../../models";
import { getPokemonById } from "../../service";
import  styles from './PokemonInfo.module.css';

const PokemonInfo: React.FC<{ name: string }> = ({ name }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const fetchPokemonData = useCallback(async () => {
    const pokemonInfo = await getPokemonById(name);
    setPokemon(pokemonInfo.data);
  }, [name, setPokemon]);

  useEffect(() => {
    fetchPokemonData()
  },[]);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  if(!pokemon) return <p>Carregando...</p>
  
  return <li className={`${styles.container} `}>
    <div className={`${styles[`${pokemon.types[0].type.name}`]}`}>
      <strong>{capitalizeFirstLetter(pokemon.name)}</strong>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name} front sprite`} />
    </div>
  </li>;
};

export default PokemonInfo;

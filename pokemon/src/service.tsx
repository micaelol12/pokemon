import axios from "axios";
import { IPokemon, NamedAPIResourceList, Pokemon } from "./models";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const listPokemon = () => {
 return api.get<NamedAPIResourceList<IPokemon[]>>(api.defaults.baseURL + "pokemon");
};

export const getPokemonById = (id: string) => {
 return api.get<Pokemon>(api.defaults.baseURL + "pokemon/" + id);
};

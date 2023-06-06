export interface IPokemon {
    name: 'string',
    url: 'string'
}

export interface NamedAPIResourceList<T> {
    count: number;
    next: string;
    previous: string | null;
    results: T[]
}

interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource<Ability>;
  }
  
  interface PokemonFormType {
    slot: number;
    type: NamedAPIResource<Type>;
  }
  
  interface PokemonTypePast {
    generation: NamedAPIResource<Generation>;
    types: PokemonType[];
  }
  
  interface PokemonHeldItem {
    item: NamedAPIResource<Item>;
    version_details: PokemonHeldItemVersion[];
  }
  
  interface PokemonHeldItemVersion {
    version: NamedAPIResource<Version>;
    rarity: number;
  }
  
  interface PokemonMove {
    move: NamedAPIResource<Move>;
    version_group_details: PokemonMoveVersion[];
  }
  
  interface PokemonMoveVersion {
    move_learn_method: NamedAPIResource<MoveLearnMethod>;
    version_group: NamedAPIResource<VersionGroup>;
    level_learned_at: number;
  }
  
  interface PokemonStat {
    stat: NamedAPIResource<Stat>;
    effort: number;
    base_stat: number;
  }
  
  interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
  }
  
  interface PokemonType {
    slot: number;
    type: NamedAPIResource<Type>;
  }
  
  interface PokemonSpecies {
    name: string;
    url: string;
  }
  
  export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource<PokemonForm>[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    past_types: PokemonTypePast[];
    sprites: PokemonSprites;
    species: NamedAPIResource<PokemonSpecies>;
    stats: PokemonStat[];
    types: PokemonType[];
  }
  
  interface NamedAPIResource<T> {
    name: string;
    url: string;
  }
  
  interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource<Version>;
  }
  
  interface Generation {
    name: string;
    url: string;
  }
  
  interface Ability {
    name: string;
    url: string;
  }
  
  interface Type {
    name: string;
    url: string;
  }
  
  interface PokemonForm {
    name: string;
    url: string;
  }
  
  interface Item {
    name: string;
    url: string;
  }
  
  interface Move {
    name: string;
    url: string;
  }
  
  interface MoveLearnMethod {
    name: string;
    url: string;
  }
  
  interface VersionGroup {
    name: string;
    url: string;
  }
  
  interface Stat {
    name: string;
    url: string;
  }
  
  interface Version {
    name: string;
    url: string;
  }
  
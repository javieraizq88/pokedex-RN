import { pokeApi } from "../../config/api/pokeApi";
import type { Pokemon } from "../../domain/models/pokemon";
import type { PokeApiPaginatedResponse, PokeAPIPokemon } from "../../infrastucture/interfaces/pokeApi.interfaces";
import { PokemonMapper } from "../../infrastucture/mappers/pokemon.mapper";

export const getPokemons = async (
    page: number,
    limit: number = 20,
  ): Promise<Pokemon[]> => {
    try {
        const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
        const {data} = await pokeApi.get<PokeApiPaginatedResponse>(url);
    
        const pokemonPromises = data.results.map(info => {
          return pokeApi.get<PokeAPIPokemon>(info.url);
        });
    
        const pokeApiPokemons = await Promise.all(pokemonPromises);
        const pokemonsPromises = pokeApiPokemons.map(item =>
          PokemonMapper.pokeApiPokemonToEntity(item.data),
        );
  
        return await Promise.all(pokemonsPromises);

    } catch (error) {
        console.log(error)
        throw new Error("Error getting polemons")
    }
}
import { pokeApi } from "../../config/api/pokeApi";
import type { Pokemon } from "../../domain/models/pokemon";
import type { PokeApiPaginateResponse, PokeAPIPokemon } from "../../infrastucture/interfaces/pokeApi.interfaces";

export const getPokemons = async (
    page: number,
    limit: number = 20,
): Promise<Pokemon[]> => {
    try {
        const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
        const { data } = await pokeApi.get<PokeApiPaginateResponse>(url);

        const pokemonPromises = data.results.map((info) => {
            return pokeApi.get<PokeAPIPokemon>(info.url);
        })

        const pokeApiPokemons = await Promise.all(pokemonPromises);
        

        console.log(pokeApiPokemons)

        return [];

    } catch (error) {
        console.log(error)
        throw new Error("Error getting polemons")
    }
}
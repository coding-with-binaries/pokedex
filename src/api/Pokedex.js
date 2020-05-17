import axios from 'axios';
import { GET_PAGINATED_POKEMONS_URL } from './uri';

export class PokedexApi {
  static async getPaginatedPokemonList(offset = 0, limit = 20) {
    try {
      const response = await axios.get(
        GET_PAGINATED_POKEMONS_URL(offset, limit)
      );
      const pokemonList = response.data.results.map((i) => ({
        name: i.name,
        id: i.url.substring(34, i.url.length - 1),
      }));
      return pokemonList;
    } catch (e) {
      console.error('Error occured while fetching list of pokemons: ', e);
    }
  }
}

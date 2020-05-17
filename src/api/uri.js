const BASE_URL = `https://pokeapi.co/api/v2`;

/**
 * @param {number} offset
 * @param {number} limit
 * @description Get the paginated list of pokemon based on offset and limit
 */
export const GET_PAGINATED_POKEMONS_URL = (offset, limit) =>
  `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`;

/**
 * @param {string} idOrName
 * @description Get the pokemon by its pokedex id or name
 */
export const GET_POKEMON_BY_ID_OR_NAME_URL = (idOrName) =>
  `${BASE_URL}/pokemon/${idOrName}`;

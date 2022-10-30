import axios from "axios";

const instancePokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})
export const  fetchPokemons = async () => {
    const {data} = await instancePokemon.get()
    return data.results
}
export const fetchOnePokemon = async (query) => {
    const {data} = await instancePokemon.get(`/${query}`)
    
    return {url: data.sprites.front_default,
    name: data.name}
}
import { useState } from 'react'

const Pokemon = () => {

    const [pokemons, setPokemons] = useState([])

    const handleFetchPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        console.log(data);
        setPokemons(data.result)
    }

    return (
        <div>
            <button onClick={handleFetchPokemon}>Fetch Pokemon</button>
            <ul>
                {pokemons.map(pokemon => {
                    return <li key={pokemon.url}>{pokemon.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Pokemon;
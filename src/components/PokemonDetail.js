import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import './whole.css'
import {Link} from 'react-router-dom'


const fetchPokemonDetail = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};

const PokemonDetail = () => {
    const { name } = useParams();
    const { data: pokemonData, error, isLoading } = useQuery(name, () => fetchPokemonDetail(name));

    if (isLoading) return <div className="loading">Loading...</div>; 
    if (error) return <div className="error">Error: {error.message}</div>;

    return (
        
        <div className="pokemon-detail">
            <h1>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h1>
            <img 
                src={pokemonData.sprites.front_default} 
                alt={`img of ${pokemonData.name}`} 
            />
            <h2>Types</h2>
            <ul>
                {pokemonData.types.map((type) => (
                    <li key={type.type.name}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</li>
                ))}
            </ul>
            <h2>Abilities</h2>
            <ul>
                {pokemonData.abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
            <h2>Stats</h2>
            <ul>
                {pokemonData.stats.map((stat) => (
                    <li key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>
            <Link to="/pokedex" className="back">Back to Pokédex</Link>
        </div>
    );
};

export default PokemonDetail;
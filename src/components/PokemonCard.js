import React from 'react';
import { useQuery } from 'react-query';
import './Pokedex.css'; 

const fetchPokemonData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};

const PokemonCard = ({ name, url }) => {
    const { data: pokemonData, error, isLoading } = useQuery(name, () => fetchPokemonData(url));

    if (isLoading) return <div className="loading">Loading...</div>; 
    if (error) return <div className="error">Error: {error.message}</div>;

    return (
        <div className="pokemon-card">
            <img 
                src={pokemonData.sprites.front_default} 
                alt={`Image of ${name}`} 
                className="pokemon-image" 
            />
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        </div>
    );
};

export default PokemonCard;
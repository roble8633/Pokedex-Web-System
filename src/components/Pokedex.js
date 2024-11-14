import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard'; 
import Navbar from './Navbar'; 
import './Pokedex.css';

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const limit = 100;

    useEffect(() => {
        const fetchPokemon = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const offset = (currentPage - 1) * limit;
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                setPokemonList(response.data.results);
                setPageCount(Math.ceil(response.data.count / limit));
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemon();
    }, [currentPage]);

    useEffect(() => {
        if (searchTerm) {
            const filteredList = pokemonList.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPokemonList(filteredList);
        } else {
            setFilteredPokemonList(pokemonList);
        }
    }, [searchTerm, pokemonList]);

    const handleNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <Navbar />
            <h1>Welcome to Pokedex</h1>
            <input
                type="text"
                className="search-bar" 
                placeholder="Search Pokémon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {isLoading && <p className="para">Loading Pokémon...</p>}
            {error && <p className="error">Error: {error}</p>}
            {filteredPokemonList.length > 0 && (
                <div className="pokemon-grid">
                    {filteredPokemonList.map((pokemon, index) => (
                        <PokemonCard key={index} name={pokemon.name} url={pokemon.url}  />
                    ))}
                </div>
            )}
            {filteredPokemonList.length === 0 && !isLoading && <p className="para">Looks like we haven't caught that Pokémon yet!</p> }

            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {pageCount}</span>
                <button onClick={handleNextPage} disabled={currentPage === pageCount}>Next</button>
            </div>
        </div>
    );
};

export default Pokedex;
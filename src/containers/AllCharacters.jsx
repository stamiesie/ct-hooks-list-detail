import React, { useState, useEffect } from 'react';
import ListCharacter from '../components/app/presentation/listCharacter';
import { fetchCharacters } from '../services/ApiCall';

const AllCharacters = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCharacters()
        .then((characters) => setCharacters(characters))
        .finally(() => setLoading(false));
    }, []);

    if(loading) return <h1>Loading...</h1>;

    return <ListCharacter characters={characters} />
         
    
};

export default AllCharacters;

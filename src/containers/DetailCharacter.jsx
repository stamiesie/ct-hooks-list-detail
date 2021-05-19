import React, { useState, useEffect } from 'react';
import Character from '../components/app/presentation/Character';
import { fetchCharactersById } from '../services/ApiCall'

const DetailCharacter = ({ match }) => {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});

    console.log('id', match)

    useEffect(() => {
        fetchCharactersById(match.params.id)
        .then((detail) => setDetail(detail))
        .finally(() => setLoading(false))
    }, []);

    if(loading) return <h1>Loading...</h1>

    return (
        <div>
            <Character
            {...detail}/>
        </div>
    )

};

export default DetailCharacter;




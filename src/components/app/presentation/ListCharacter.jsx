import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const ListCharacter = ({ characters }) => {
    return (
    <ul aria-label="characters">
        {characters.map((character) => (
            <li key={character._id}>
                <Link to={`/${character._id}`}>
                <Character 
                name={character.name}
                photoUrl={character.photoUrl}
                affiliation={character.affiliation}
                />
            </Link>
            </li>
        ))}
    </ul>
    )};

ListCharacter.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            photoUrl: PropTypes.string.isRequired,
            affiliation: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ListCharacter;
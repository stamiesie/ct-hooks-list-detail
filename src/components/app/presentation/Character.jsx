import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl, affiliation}) => {
    return (
    <div>
        <p>{name}</p>
        <img src={photoUrl} alt={name}/>
        <p>{affiliation}</p>
    </div>
)};

Character.propTypes = {
name: PropTypes.string.isRequired,
photoUrl: PropTypes.string.isRequired,
affiliation: PropTypes.string.isRequired,
};

export default Character;
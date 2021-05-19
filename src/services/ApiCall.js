export const fetchCharacters = async () => {
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
    const results = await res.json();

    return results;
};

export const fetchCharactersById = async (id) => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);
    const results = await res.json();
    
    return results;
}
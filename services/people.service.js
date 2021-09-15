const axios = require('axios').default;

const getPeople = async (sortBy) => {
    const url = 'https://swapi.dev/api/people/';

    let people = await getPeopleRecursive(url);

    if(sortBy) {
        people = people.sort( (a, b) => a[sortBy] < b[sortBy] ? -1 : 1);
    }

    return people;
}

const getPeopleRecursive = async (url) => {
    console.log(`Fetching people from ${url}`);
    
    if(!url)
        return [];

    const result = await axios.get(url);
    if(!result.data || result.status !== 200)
        return [];

    return result.data.results
        .concat(await getPeopleRecursive(result.data.next));
} 

module.exports = {
    getPeople
}
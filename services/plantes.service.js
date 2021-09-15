const axios = require('axios').default;

const getPlanets = async () => {
    const url = 'https://swapi.dev/api/planets/';
    return await getPlantesRecursive(url);
}

const getPlantesRecursive = async (url) => {
    
    if(!url)
        return [];

    console.log(`Fetching planets from ${url}`);

    const result = await axios.get(url);
    if(!result.data || result.status != 200)
        return [];
    
    return (await replaceResidents(result.data.results)).concat(await getPlantesRecursive(result.data.next));
    
}

const replaceResidents = async (planets) => {
    
    const replaced = await Promise.all( planets.map( async(planet) => {
        const residents = await getResidents(planet.residents);
        return { ...planet, residents };
    }));

    return replaced;
    
}

const getResidents = (urls) => {
    const promises = urls.map( url => axios.get(url) );
    return Promise.all(promises)
        .then( results => results.map(r => r.data))
        .then( data => data.map(p => p.name));
}

module.exports = {
    getPlanets
}
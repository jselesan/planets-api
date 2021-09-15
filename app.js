const express = require('express');
const app = express();
const PeopleService = require('./services/people.service');
const PlanetsService = require('./services/plantes.service');

app.get('/people', async (req, res) => {
    const people = await PeopleService.getPeople(req.query.sortBy);

    res.json(people);
});

app.get('/planets', async (req, res) => {
    const planets = await PlanetsService.getPlanets();
    res.json(planets);
})

const port = process.env.PORT || 4000;
app.listen( port,  () => console.log(`API listenning on port ${port}`));
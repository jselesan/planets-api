# Planets API

Sample application that shows how to fetch and transform data from an API.

### Run
``` bash
yarn install
yarn start
```

By default the application listens on port 4000. If you need to change it you can use the port environment variable. For example, to listen on port 9000 you can use:

```bash
PORT=9000 yarn start
```

## Endpoints

### /people
Returns all the people data from the API. You can add the sortBy query param in order to get the data sorted by heiht, mass or name.

For example:

```bash
/people?sortBy=height
```

### /planets
Return all the planets from the API

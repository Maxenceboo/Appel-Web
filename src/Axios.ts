import axios from "axios" // axios is a promise based HTTP client for the browser and node.js

export default axios.create({ // axios.create() returns a new instance of axios
    baseURL: "http://localhost:3030/api", // set the baseURL to the api
    headers: {
        Accept: 'application/json',// set the default headers to accept json
        'Content-Type': 'application/json' // set the default headers to content type json
      },
})
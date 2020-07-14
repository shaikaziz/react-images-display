const axios = require('axios')

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YX7BImxP2NhpWsaOdU1pJ_9Es_A3k7cRoo3QKxX6jTI'
    }
})

module.exports = unsplash
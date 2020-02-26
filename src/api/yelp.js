import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer aSyM6ctQxxNyVL-njLkVWKQAFEc6vnbIizrVhwrRkimi5NCspglwk2REsRVJwL0UHd9LKgepwecVbwaXGCGmoLTplmxzkze5gKOTlM2x3DEzmpJhQ8C3AoGz4ZNVXnYx'
  }
})

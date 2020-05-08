import axios from 'axios'

//makes a request to the route in the State API
export default {
    getAll() {
        return axios.get('/api/states/').then( response => {
            return response.data
        })
    },

    //sends a patch request that will be handled by the patch in states.js
    setVisited(stateName, visited) {
        return axios.patch('/api/state/'+ stateName, { visited: visited }).then(response => {
            return response.data
        })
    },

    //makes requests to new API route
    //takes stateName as argument and uses the URL to build a request
    getOne(stateName) {
        return axios.get('/api/states/' + stateName).then( response => {
            return response.data
        })
    },
}
import axios from 'axios';
import qs from 'qs';
import { getAuthToken } from '../helpers/authHeader';

export default {
    getItineraryList,
    getItineraryDetails,
    getCity,
    createCity,
    createItinerary,
};

function getItineraryList() {
    return axios.get('/api/itineraries/')
        .then((response) => {
            console.log(response);
        });
}

function getItineraryDetails(slug) {
    return axios.get(`/api/itineraries/details/${slug}/`)
        .then((response) => response.data);
}

function getCity(city) {
    return axios.get(`/api/cities/?search=${city}`)
        .then(({ data }) => {
            const promisesUrls = data.map(city => axios.get(`/api/cities/${city.pk}`));
            return Promise.all(promisesUrls).then(response => response.map(item => item.data));
        }).then(response => response);
};

function createCity(cityObj) {
    const authToken = getAuthToken();
    return axios.post('/api/cities/create/', cityObj, {
        headers: {
            'Authorization': 'Bearer ' + authToken
        }
    })
        .then(response => response.data);
}

function createItinerary(itineraryObj, token) {
    const authToken = getAuthToken();
    const options = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'content-type': 'multipart/form-data'
        },
        data: itineraryObj,
        url: '/api/itineraries/create/',
    };
    return axios(options)
        .then(response => response.data);
}
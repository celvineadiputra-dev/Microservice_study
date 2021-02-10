const axios = require('axios');

const {TIME_OUT} = process.env;

module.exports = baseUrl =>{
    return axios.create({
        baseUrl : baseUrl,
        timeOut : TIME_OUT
    });
}
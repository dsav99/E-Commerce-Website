import axios from 'axios';


const instance = axios.create({
    // baseURL:'http://localhost:5001/project-4dadb/us-central1/api' //API (cloud function) URL
    // baseURL:'https://us-central1-project-4dadb.cloudfunctions.net/api'
    // baseURL:'http://localhost:5001/project-4dadb/us-central1/api'
       baseURL:"https://us-central1-project-4dadb.cloudfunctions.net/api"
});

export default instance;
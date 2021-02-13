import axios from 'axios';

export default function axioss(url, method, callback){
    axios({
        url : url,
        method : method,
        // baseURL : "http://localhost:8080",
        // withCredentials : true
    })
    .then( (response)=>callback(response.data))
    .catch( (response) => console.log(response))
    .finally( (response) => console.log(response));
}
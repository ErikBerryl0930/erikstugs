import axios from  'axios';
import {GET_LATEST,GET_OTHER} from "..types";

const URL = "http://localhost:8000/articles";

export function latesNews(){
    const request = axios.get(`${URL}?_order=desc&_end=2`).then((response) => response.data)
return {
    type: GET_LATEST,
    payload: request,

};
}
export function otherNews(){
    const request = axios.get(`${URL}?_order=desc_start=3&_end=15`).then((response) => response.data)
return {
    type: GET_OTHER,
    payload: request,

};
}

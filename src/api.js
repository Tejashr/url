import axios from "axios";

export function Postlongurl(data){
    return axios.post(`http://localhost:5000/urlshort`,data)
}

export function Getlongurl(){
    return axios.get(`http://localhost:5000/urlshort`)
}

export function Getlongurlsecure(data){
    return axios.get(`http://localhost:5000/urlshort`,data)
}

export function Getlongurlbyid(id){
    return axios.get(`http://localhost:5000/${id}`)
}

export function Postlogin(data){
    return axios.post(`http://localhost:5000/login`,data)
}

export function Postregister(data){
    return axios.post(`http://localhost:5000/register`,data)
}

export function getCommonData(data){
    return axios.get(`http://localhost:5000/common`,data)
}
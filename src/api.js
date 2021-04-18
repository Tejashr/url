import axios from "axios";

export function Postlongurl(data){
    return axios.post(`https://urltejas.herokuapp.com/urlshort`,data)
}

export function Getlongurl(){
    return axios.get(`https://urltejas.herokuapp.com/urlshort`)
}

export function GetlongurlbyEmail(email){
    return axios.get(`https://urltejas.herokuapp.com/userurl/${email}`)
}

export function Getlongurlsecure(data){
    return axios.get(`https://urltejas.herokuapp.com/urlshort`,data)
}

export function Getlongurlbyid(id){
    return axios.get(`https://urltejas.herokuapp.com/${id}`)
}

export function Postlogin(data){
    return axios.post(`https://urltejas.herokuapp.com/login`,data)
}

export function Postregister(data){
    return axios.post(`https://urltejas.herokuapp.com/register`,data)
}

export function getCommonData(data){
    return axios.get(`https://urltejas.herokuapp.com/common`,data)
}
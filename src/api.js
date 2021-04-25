import axios from "axios";

export function Postlongurl(data){
    return axios.post(`https://urltejas.herokuapp.com/urlshort`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function GetlongurlbyEmail(email){
    return axios.get(`https://urltejas.herokuapp.com/userurl/${email}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function Getlongurlsecure(data){
    return axios.get(`https://urltejas.herokuapp.com/urlshort`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function Getlongurlbyid(id){
    return axios.get(`https://urltejas.herokuapp.com/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function Postlogin(data){
    return axios.post(`https://urltejas.herokuapp.com/login`,data)
}

export function Postregister(data){
    return axios.post(`https://urltejas.herokuapp.com/register`,data)
}

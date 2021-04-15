import React, { useEffect, useState } from 'react';
import { Getlongurl } from './api';

function Card() {

    let [userData, setuserData] = useState([])
    async function getdata(){
        let users = await Getlongurl();
        setuserData(users.data)
    }

    useEffect( () => {
        getdata();
    }, [userData.length])
   

    return (
        <>
            <div className="row">
                {
                    userData.map((user, index) => {
                        console.log(user)
                        return (
                            <div className="col-lg-4 mt-5">
                                <div class="card extra">
                                    <h5 class="card-header bg-secondary text-light">URL Shrink</h5>
                                    <div class="card-body">
                                        <a class="card-title" href={`http://localhost:5000/${user.shorturl}`} target="_blank">http://localhost:5000/{user.shorturl}</a>
                                        <p class="card-text text-light">{user.longurl}</p>
                                        <a href="/head" class="btn btn-outline-warning">home page</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card;
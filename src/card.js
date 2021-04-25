import React, { useEffect, useState } from 'react';
import { Getlongurl, GetlongurlbyEmail } from './api';
import { withRouter } from "react-router-dom";

function Card(props) {

    let [userData, setuserData] = useState([])
   

    useEffect( () => {
        async function getdata(){
            let users = await GetlongurlbyEmail(props.match.params.id);
            setuserData(users.data)
        }
        getdata();
    }, [props.match.params.id])
   

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
                                        <a class="card-title" href={`https://urltejas.herokuapp.com/${user.shorturl}`} target="_blank">https://urltejas.herokuapp.com/{user.shorturl}</a>
                                        <p class="card-text text-light">{user.longurl}</p>
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

export default withRouter(Card);
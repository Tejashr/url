import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "./usercontext";

function Nav() {

    // let {setisAuth} = useContext(UserContext)

    let history=useHistory();

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <a class="navbar-brand text-light">URL SHORTNER</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link active text-light" to="/">Home</Link>
                        <Link class="nav-item nav-link text-light" to="/login">Login</Link>
                        <Link class="nav-item nav-link text-light" to="/register">Register</Link>
                        <Link class="nav-item nav-link text-light" to="/login" onClick={()=>{
                             window.localStorage.removeItem("app_token");
                            //  setisAuth(false)
                             history.push(`/login`);
                        }}>Logout</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;

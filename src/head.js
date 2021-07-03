import React, { useState } from "react";
import { useHistory } from "react-router";
import { Postlongurl } from "./api";
import { withRouter } from "react-router-dom";

function Head(props) {

  console.log(props)

  let [longurl, setLongurl] = useState("");

  let userData = { longurl, email: props.match.params.id }

  let history = useHistory();

  function handleClick() {
    history.push(`/card/${props.match.params.id}`);
  }
  return (
    <>
      <div className="col-lg-12 text-center text-secondary mt-5">
        <h2>URL SHORTNER</h2>
      </div>
      <form onSubmit={async (e) => {
        e.preventDefault();
        handleClick();
        await Postlongurl(userData);
        setLongurl("");

      }}>
        <div className="row mt-5" >
          <div class="col-lg-10">
            <input type="text" name="longurl" class="form-control" placeholder="Paste Your Long URL" value={longurl} onChange={(e) => {
              setLongurl(e.target.value);
            }} />
          </div>
          <div className="col-lg-2">
            <input type="submit" className="btn btn-outline-secondary" value="Submit" />
          </div>
        </div>
      </form>
    </>
  )
}

export default withRouter(Head);
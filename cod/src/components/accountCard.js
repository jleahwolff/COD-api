import React from 'react';
import headShot from "../img/headshot.png"

const accountCard = () => {
    return(
        <div className="acct-card">
            <h4>@jleahwolff</h4>
            <img src={headShot}/>
            <h3>Duluth, Minnesota</h3>
            <div className="headers">
                <h5>Posts</h5>
                <h5>Following</h5>
                <h5>Followers</h5>
            </div>
            <div className="headers">
                <h6>455</h6>
                <h6>301</h6>
                <h6>65k</h6>
            </div>
        </div>
    )
    };

    export default accountCard;
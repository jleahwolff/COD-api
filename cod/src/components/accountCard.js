import React from 'react';

const accountCard = () => {
    return(
        <div className="acct-card">
            <h4>@jleahwolff</h4>
            <h3>Duluth, Minnesota</h3>
            <div className="all-stats">
            <div className="headers">
                <h5>Posts</h5>
                <h6>455</h6>
            </div>
            <div className="headers">
                <h5>Following</h5>
                <h6>301</h6>
            </div>
            <div className="headers">
                <h5>Followers</h5>
                <h6>65k</h6>
            </div>
            </div>
        </div>
    )
    };

    export default accountCard;
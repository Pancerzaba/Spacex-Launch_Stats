import React from 'react';

export default function LaunchItem({
    launch: { flight_number, mission_name, launch_date_local, launch_succes },
}) {
    return (
        <div className=" card card-body mb-3">
            <div className=" col-md-9">
                <h4> Mission: {mission_name}</h4>
                <p>Date: {launch_date_local}</p>
            </div>
            <div className=" col-md-3"></div>
            <button className="btn btn-secendary">Launch Details</button>
        </div>
    );
}

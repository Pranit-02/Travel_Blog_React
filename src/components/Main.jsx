import React from "react";

export default function Main(props) {
    return (
        <>
            <div className="main-content">
                <div className="main-card">
                    <img src={props.img} className="card-img" />
                    <div className="card-content">
                        <img src="./public/images/location.png" className="locate-img" />
                        <span className="city">{props.location}</span>
                        <a href={props.googleMapsUrl} className="google-map">View on Google Maps</a>
                        <h1>{props.title}</h1>
                        <p className="bold">{props.startDate}-{props.endDate}</p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
            <div className="center">
                <hr className="grey"></hr>
            </div>
        </>
    )
}
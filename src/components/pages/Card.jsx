import React from 'react'
import '/src/css/Card.css'
import { Link } from 'react-router-dom'

function Card({ id, image, description, title, available_seats }) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return (
        <div key={id} className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="Poster" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <h6>Seats Available : {available_seats}</h6>
                        {isLoggedIn ? (
                            <Link to={`/eventdetails/${id}`} target="_blank">
                                <button type="button" className="btn btn-primary">Read More</button>
                            </Link>
                        ) : (
                            <strong>Please login/signup to view more details.</strong>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
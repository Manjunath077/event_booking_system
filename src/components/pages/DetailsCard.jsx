import React from 'react'
import '/src/css/DetailsCard.css'

function DetailsCard({ eventData }) {
    console.log(eventData)
    return (
        <>
            <section className='productdetails'>
                <div className='productdetailscard'>
                    <div className='productdetailscardleft'>
                        <img src={eventData.image} />
                    </div>
                    <div className='productdetailscardmid'></div>
                    <div className='productdetailscardright'>
                        <div className='productdetailscardrighttop'>
                            <h1>{eventData.title}</h1>
                            <p>{eventData.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, illo tenetur, eius id obcaecati velit reiciendis aperiam dolorem placeat, minus provident at repellendus iusto sit!</p>
                        </div>
                        <div className='productdetailscardrightbottom'>
                            <h5>Date : {eventData.date}</h5>
                            <h6>Remaining Seats : {eventData.available_seats}</h6>
                        </div>
                        <div className='productdetailscardrightbottom'>
                            <h2>₹ {eventData.price}</h2>
                            <button type="button" className="btn btn-primary">Book Ticket</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailsCard
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard'
import axios from 'axios';

function EventDetails() {
    let [eventData,setEventData] = useState({})
    
    let { eid } = useParams(); 
    console.log("Event ID from URL:", eid);
    
    let getEventData = async ()=>{
        try{
            let singleEventData =await axios.get('https://manjunath077.github.io/event-data/events.json')
            if(eid){
                let event = singleEventData.data.events
                let singleEvent = event?.find((item)=>{
                    return item.id === Number(eid)
                })
                if (singleEvent) {
                    setEventData(singleEvent); 
                } else {
                    console.log("Event not found");
                }
            }
        }catch(err){
            console.log(err.message)
        }
    }
    useEffect(()=>{
        getEventData()
    },[eid])

    return (
        <>
            {eventData ? (
                <DetailsCard eventData={eventData}/> 
            ) : (
                <p>Loading event details...</p>
            )}
        </>
    );
}

export default EventDetails;

import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import '/src/css/Events.css';

function Events() {
  let [eventList, setEventList] = useState([]);
  const [selectedItem, setSelectedItem] = useState('Dropdown');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  let fetchEventData = async () => {
    try {
      setLoading(true); 
      let response = await axios.get("https://manjunath077.github.io/event-data/events.json");
      setEventList(response.data.events);
      setLoading(false); 
    } catch (error) {
      console.log(error.message);
      setLoading(false); 
    }
  };

  const filterEvents = (category) => {
    if (category === 'Dropdown' || category === 'All') {
      setFilteredEvents(eventList);
    } else {
      const filtered = eventList.filter(event => event.category === category);
      setFilteredEvents(filtered);
    }
  };
  useEffect(() => {
    fetchEventData();
  }, []);

  useEffect(() => {
    filterEvents(selectedItem);
  }, [selectedItem, eventList]);

  const handleSearch = () => {
    const filteredByName = eventList.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setLoading(true); 
  
    if (filteredByName.length > 0) {
      setFilteredEvents(filteredByName);
    } else {
      alert("No Events found for this search!");
    }
  
    setLoading(false);
  };
  

  return (
    <>
      <div className='eventselection'>
        <div className='eventselectioninput'>
          <input
            name='event'
            placeholder='Start typing to search event ...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button type="button" className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {selectedItem}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" type="button" onClick={() => handleSelectItem('All')}>All</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleSelectItem('Music')}>Music</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleSelectItem('Sports')}>Sports</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleSelectItem('Comedy')}>Comedy</button></li>
          </ul>
        </div>
      </div>

      <section className='eventcardsection'>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          filteredEvents?.map(({ id, title, description, image, available_seats }) => {
            return (
              <Card
                key={id}
                id={id}
                title={title}
                description={description}
                image={image}
                available_seats={available_seats}
              />
            )
          })
        )}
      </section>
    </>
  );
}

export default Events;

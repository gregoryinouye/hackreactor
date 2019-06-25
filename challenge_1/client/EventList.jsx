import React from 'react';

const EventList = props => {
  const { events } = props;

  return (
    <div>
      <div>EVENT LIST</div>
      {events.map(event => <EventEntry />)}
    </div>
  );
};

export default EventList;

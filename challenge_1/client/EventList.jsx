import React from 'react';

import EventEntry from './EventEntry.jsx';

const EventList = props => {
  const { events } = props;

  return (
    <div>
      <div>EVENT LIST</div>
      <br></br>
      {events.map((event, index) =>
        <EventEntry
          key={index}
          date={event.date}
          description={event.description}
          lang={event.lang}
          category1={event.category1}
          category2={event.category2}
          granularity={event.granularity} />
      )}
    </div>
  );
};

export default EventList;

import React from 'react';

import EventEntry from './EventEntry.jsx';

const EventList = props => {
  const { events } = props;

  return (
    <table>
      <thead>
      <tr>
        <th>
          Date
        </th>
        <th>
          Description
        </th>
        <th>
          Edit
        </th>
      </tr>
      </thead>
      <tbody>
        {events.map((event, index) => <EventEntry key={event.date + ':' + index} event={event} />)}
      </tbody>
    </table>
  );
};

export default EventList;

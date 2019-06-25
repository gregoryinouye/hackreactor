import React from 'react';

const EventEntry = props => {
  const { date, description, lang, category1, category2, granularity } = props;

  return (
    <div>
      <div>{date}</div> <div>{description}</div>
      <br></br>
    </div>
  );
}

export default EventEntry;

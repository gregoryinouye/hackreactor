import React from 'react';

class EventEntry extends React.Component {
  constructor(props) {
    super(props);

    const { date, description, lang, category1, category2, granularity } = props.event;

    this.state = {
      date: date,
      description: description,
      isOpen: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ isOpen: e.checked });
  }

  
  render () {
    const { date, description, isOpen } = this.state;

    return (
      <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td><input type="checkbox" value={isOpen} onChange={this.handleChange} /></td>
      </tr>
    );
  }
}

export default EventEntry;

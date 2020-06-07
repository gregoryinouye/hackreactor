import React from 'react';
import { connect } from 'react-redux';

class Board extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>Board Component</div>
    );
  }
}

const mapStateToProps = state => ({
  move: state.move.items
});

export default connect(mapStateToProps, {  })(Board);
import React from 'react';

class Overview extends React.Component {
  render () {
    return(
      <div className="Overview">

        <div className="selected">
          <div className="menu-icon active"><i class="fas fa-bars"></i></div>
          <h2>All Notes</h2>
        </div>

        
        <div className="note_file"></div>
        <div className="note_file"></div>
        <div className="note_file"></div>
        <div className="note_file"></div>

      </div>
    )
  }
}

export default Overview;
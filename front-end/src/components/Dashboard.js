import React from 'react';
import SideNav from './SideNav';
import Note from './Note';
import Overview from './Overview';
// import '../manage';
import '../style/style-dashboard.css';

class Dashboard extends React.Component {
  render(){
    return(
      <body>
        <SideNav className='sidenav' />
        <div className='grid-container'>
          <Overview className='Overview' />
          <Note className='Note' />
        </div>
      </body>
    )
  }
}

export default Dashboard;
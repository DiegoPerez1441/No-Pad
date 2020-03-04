import React from 'react';
// import portrait from '../img/portrait.jpg'
class SideNav extends React.Component {
  render () {
    return(
     <aside className="sidenav">
       <div className="user">
          {/* <img src={portrait} alt="Portrait of me" /> */}
          <div className="user-text">
            <span id="name">Diego Perez</span>
            <span id="email">email@example.com</span>
          </div>
        </div>

        <div className="QuickAccess">
          {/* <!-- <h2 id="AllNotes"><i className="fas fa-sticky-note"></i>All Notes</h2>
          <h2 id="Important"><i className="fas fa-star"></i>Important</h2>
          <h2 id="Folders"><i className="fas fa-folder"></i>Folders</h2> -->
          <!-- <ul className="QuickAccess_list fa-ul">
            <li><span className="fa-li"><i className="fas fa-sticky-note"></i></span>All Notes</li>
            <li><span className="fa-li"><i className="fas fa-star"></i></span>Important</li>
            <li><span className="fa-li"><i className="fas fa-folder"></i></span>Folders</li>
            <li><span className="fa-li"><i className="far fa-square"></i></span>Shared with Me</li>
          </ul> --> */}
          <ul className="QuickAccess_list fa-ul">
            <li><span className="fa-li"><i className=""></i></span><i className="fas fa-file-alt"></i>All Notes</li>
            <li><span className="fa-li"><i className="fas fa-caret-right expand-icon"></i></span><i className="fas fa-star"></i>Important</li>
            <li><span className="fa-li"><i className="fas fa-caret-right expand-icon"></i></span><i className="fas fa-folder"></i>Folders</li>
            <li><span className="fa-li"><i className="fas fa-caret-right expand-icon"></i></span><i className="fas fa-user-friends"></i>Shared with Me</li>
          </ul>
        </div>

        <div className="Workspaces">
          <h2>Workspaces</h2>
          <ul className="Workspaces_list fa-ul">
            <li><span className="fa-li"><i className=""></i></span><i className="fas fa-briefcase"></i>Work</li>
            <li><span className="fa-li"><i className=""></i></span><i className="fas fa-chalkboard-teacher"></i>School</li>
            <li><span className="fa-li"><i className=""></i></span><i className="fas fa-user"></i>Personal</li>
          </ul>
        </div>

        <div className="Misc">
          <ul className="Misc_list fa-ul">
            <li><i className="fas fa-trash"></i>Trash</li>
            <li><i className="fas fa-cog"></i>Settings</li>
          </ul>
        </div>
     </aside>
    )
  }
}

export default SideNav;
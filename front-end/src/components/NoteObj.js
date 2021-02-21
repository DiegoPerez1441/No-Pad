import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeHTMLTags } from '../helpers'
import { deleteNoteForUser } from '../utils/localStorageUtils'

const NoteObj = ({ note, selectedNoteId, selectNote, deleteNote }) => {

  // const selectNote = () => {
  //   // setNote(note)
  //   // console.log(note.id + " - Note Selected")


  // }

  // const deleteNote = () => {
  //   // deleteNoteForUser({ ...note })
  //   // setNote(null)
  //   // fetchLatestNotes()
  //   // console.log(note.id + " - Info Pressed")
  // }

  const handleDeleteNote = (e) => {
    // https://stackoverflow.com/questions/2385113/howto-div-with-onclick-inside-another-div-with-onclick-javascript
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();

    deleteNote(note.id)
  }

  return(
    <div className="NoteObj-container">
      <div className="NoteObj" onClick={() => {selectNote(note.id)}}>
        <h2>{note.title}</h2>
        <p>{removeHTMLTags(note.body.substring(0, 20)) + "..."}</p>
        {/* <h6>{note.id}</h6> */}
        {/* <h6>{note.lastModified}</h6> */}
      </div>
      <div className="NoteObjInfo" onClick={handleDeleteNote}>
        <FontAwesomeIcon icon={['fas', 'trash']} className="sidenav-icon"/>
        {/* <span>•</span>
        <span>•</span>
        <span>•</span> */}
      </div>
    </div>
  )
}

export default NoteObj;


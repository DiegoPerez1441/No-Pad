import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeHTMLTags } from '../helpers'
import { deleteNoteForUser } from '../utils/localStorageUtils'

const NoteObj = ({ note, selectedNoteId, selectNote }) => {

  // const selectNote = () => {
  //   // setNote(note)
  //   // console.log(note.id + " - Note Selected")


  // }

  const deleteNote = () => {
    // deleteNoteForUser({ ...note })
    // setNote(null)
    // fetchLatestNotes()
    // console.log(note.id + " - Info Pressed")
  }

  return(
    <div className="NoteObj-container">
      <div className="NoteObj" onClick={() => {selectNote(note.id)}}>
        <h2>{note.title}</h2>
        <p>{removeHTMLTags(note.body.substring(0, 20)) + "..."}</p>
        {/* <h6>{note.id}</h6> */}
        {/* <h6>{note.lastModified}</h6> */}
      </div>
      <div className="NoteObjInfo" onClick={deleteNote}>
        <FontAwesomeIcon icon={['fas', 'trash']} className="sidenav-icon"/>
        {/* <span>•</span>
        <span>•</span>
        <span>•</span> */}
      </div>
    </div>
  )
}

export default NoteObj;


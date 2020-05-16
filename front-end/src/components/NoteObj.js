import React from 'react';

const NoteObj = ({ note, setNote }) => {

  const selectNote = () => {
    setNote(note)
    // console.log(note)
  }

  return(
    <div className="NoteObj" onClick={selectNote}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <h6>{note.lastModified}</h6>

      {/* <button
      type="submit"
      onClick={handleNoteObjSelection}
      className="NoteObj_Button"
      >
        <h2>{title}</h2>
        <p>{content}</p>
        <h6>{lastModified}</h6>
      </button> */}

    </div>
  )
}

export default NoteObj;


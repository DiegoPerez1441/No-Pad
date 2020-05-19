import React, { useEffect, useState, useCallback } from 'react';
import ReactQuill from 'react-quill'
import debounce from '../helpers'
import { updateNoteForUser } from '../utils/localStorageUtils'

const Note = ( { note, fetchLatestNotes } ) => {

  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const [noteContent, setNoteContent] = useState("")

  // useEffect(() => {
  //   note !== null && setNoteContent(note.content)
  // }, [note])

  const handleNoteContentChange = (e) => {
    const newNoteContent = e.target.value
    setNoteContent(newNoteContent)
  }

  const updateNote = useCallback((e) => {
    e.preventDefault();
    updateNoteForUser({ ...note, content: noteContent })
    fetchLatestNotes()
  }, [note, noteContent, fetchLatestNotes])

  const update = debounce(() => {
    // Come back later
    console.log("Updating database")
  }, 1500)

  const updateBody = async (val) => {
    await setText(val)

    update()
  }

  return(
    <div className="noteEditorContainer">
      {/* <h2>{(note !== null) ? note.title : ""}</h2>
      {(note !== null) ? <textarea value={noteContent} onChange={handleNoteContentChange}></textarea> : ""}
      {(note !== null) ? <button type="submit" onClick={updateNote} className="button_form">Submit</button> : ""} */}

      <ReactQuill
        value={text}
        onChange={updateBody}>
      </ReactQuill>

    </div>
  )
  
}

export default Note;
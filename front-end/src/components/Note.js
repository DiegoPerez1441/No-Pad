import React, { useEffect, useState, useCallback } from 'react';
import ReactQuill from 'react-quill'
import debounce from '../helpers'
import { updateNoteForUser } from '../utils/localStorageUtils'

const Note = ( { note, fetchLatestNotes } ) => {

  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  // const [text, setText] = useState('')

  const [noteContent, setNoteContent] = useState("")

  // useEffect(() => {
  //   note !== null && setNoteContent(note.content)
  // }, [note])

  useEffect(() => {
    console.log(noteContent)
  }, [noteContent])

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

  const RQOnChange = debounce((content, delta, source, editor) => {
    setNoteContent(editor.getHTML())
    // console.log(editor.getHTML()); // rich text
		// console.log(editor.getText()); // plain text
		// console.log(editor.getLength()); // number of characters
  }, 1000)

  // const updateBody = async (val) => {
  //   await setText(val)

  //   update()
  // }

  const RQModules = {
    toolbar: [
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{ 'align': [] }],
        [{ 'color': [] }, { 'background': [] }],
        ['clean']
      ]
  };

  const RQFormats = [
    'font',
    'size',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'align',
    'color', 'background'
  ];

  return(
    <div className="noteEditorContainer">
      {/* <h2>{(note !== null) ? note.title : ""}</h2>
      {(note !== null) ? <textarea value={noteContent} onChange={handleNoteContentChange}></textarea> : ""}
      {(note !== null) ? <button type="submit" onClick={updateNote} className="button_form">Submit</button> : ""} */}

      <ReactQuill
        formats={RQFormats}
        // modules={RQModules}
        value={noteContent}
        onChange={RQOnChange}>
      </ReactQuill>

    </div>
  )
  
}

export default Note;
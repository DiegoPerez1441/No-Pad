import React, { useEffect, useState, useCallback } from 'react';
import ReactQuill from 'react-quill'
import debounce from '../helpers'
import { updateNoteForUser } from '../utils/localStorageUtils'

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { TextField } from '@material-ui/core';

const Note = ( { note, fetchLatestNotes, setUpdatedNoteTitle, setUpdatedNote } ) => {

  const [id, setId] = useState('')
  const [noteTitle, setNoteTitle] = useState('')
  // const [text, setText] = useState('')

  const [noteContent, setNoteContent] = useState("")

  // useEffect(() => {
  //   note !== null && setNoteContent(note.content)
  // }, [note])

  useEffect(() => {
    if (note === null) {
      setNoteTitle("")
      setNoteContent("")
    } else {
      setNoteTitle(note[0].title)
      setNoteContent(note[0].body)
      // console.log("Note: " + note[0])
    }
  }, [note])

  // useEffect(() => {
  //   // console.log("Note Content: " + noteContent)
  //   // console.log("Note Title: " + noteTitle)
  // }, [noteTitle, noteContent])

  const handleNoteContentChange = (e) => {
    const newNoteContent = e.target.value
    setNoteContent(newNoteContent)
  }

  const updateNote = useCallback((e) => {
    e.preventDefault();
    updateNoteForUser({ ...note, content: noteContent })
    fetchLatestNotes()
  }, [note, noteContent, fetchLatestNotes])

  // const update = debounce(() => {
  //   // Come back later
  //   console.log("Updating database")
  // }, 1500)

  const RQOnChange = debounce((content, delta, source, editor) => {
    setNoteContent(editor.getHTML())
    setUpdatedNote(editor.getHTML())
    // console.log("Note Updated")
    // console.log(editor.getHTML()); // rich text
		// console.log(editor.getText()); // plain text
		// console.log(editor.getLength()); // number of characters
  }, 1500)

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

  const RQModules_Adv = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
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

  // Controlled component
  const handleNoteTitleChange = (e) => {
    setNoteTitle(e.target.value)
    setUpdatedNoteTitle(e.target.value)
    // console.log(e.target.value)
  }

  const useStyles = makeStyles((theme) => ({
    input: {
      marginLeft: theme.spacing(0),
      flex: 1,
    },
  }));

  const classes = useStyles()

  return(
    <div className="noteEditorContainer">
      {/* <h2>{(note !== null) ? note.title : ""}</h2>
      {(note !== null) ? <textarea value={noteContent} onChange={handleNoteContentChange}></textarea> : ""}
      {(note !== null) ? <button type="submit" onClick={updateNote} className="button_form">Submit</button> : ""} */}

      {/* <InputBase
        className={classes.input}
        fullWidth={true}
        defaultValue={noteTitle}
        inputProps={{ 'aria-label': "note title" }}
        // placeholder="Title"
      /> */}

      <InputBase
        id="noteTitleInput"
        fullWidth={true}
        value={noteTitle}
        placeholder="Note Title"
        onChange={handleNoteTitleChange}>
      </InputBase>

      <ReactQuill
        modules={RQModules}
        // formats={RQFormats}
        value={noteContent}
        onChange={RQOnChange}>
      </ReactQuill>

    </div>
  )
  
}

export default Note;
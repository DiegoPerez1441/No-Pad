import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';
import Note from './Note';
import EmptyNote from './EmptyNote';
import Overview from './Overview';
import debounce from '../helpers'
// import '../manage';
import '../style/style-dashboard.css';
import { getAllNotesForUser } from '../utils/localStorageUtils';

import SnackBarMessage from '../utils/SnackBarMessage'

const firebase = require('firebase')

const Dashboard = ( { email } ) => {

  // const [notes, setNotes] = useState(getAllNotesForUser(user))
  // const [note, setNote] = useState(null)

  // const fetchLatestNotes = () => setNotes(getAllNotesForUser(user))

  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [selectedNoteId, setSelectedNoteId] = useState(null)
  
  const [updatedNoteTitle, setUpdatedNoteTitle] = useState(null)
  const [updatedNote, setUpdatedNote] = useState(null)

  const [snackBarToggle_ND, setSnackBarToggle_ND] = useState(false)
  const [snackBarToggle_NC, setSnackBarToggle_NC] = useState(false)

  const createNewNote = (noteName) => {
    firebase
      .firestore()
      .collection('users')
      .doc(email)
      .collection('notes')
      .add({
        title: noteName,
        body: ""
      })

      setSnackBarToggle_NC(true)
  }

  const deleteNote = (noteId) => {
    
    // Reset React Quill Editor
    setSelectedNoteId(null)
    setSelectedNote(null)
    
    firebase
      .firestore()
      .collection('users')
      .doc(email)
      .collection('notes')
      .doc(noteId).delete()
      
    setSnackBarToggle_ND(true)

    // console.log("Note Deleted | Id: " + noteId)
  }

  const selectNote = (_id) => {
    const s_note = notes.filter((i) => _id === i.id)
    setSelectedNote(s_note)
    setSelectedNoteId(_id)
    // console.log(_id)
  }

  useEffect(() => {
    // console.log(selectedNote)
  }, [selectedNote])

  useEffect(() => {
    // firebase
    //   .firestore()
    //   .collection('notes')
    //   .onSnapshot(serverUpdate => {
    //     const _notes = serverUpdate.docs.map(_doc => {
    //       const data = _doc.data()
    //       data['id'] = _doc.id
    //       return data
    //     })
    //     setNotes(_notes)
    //     console.log(_notes)
    //   })
    firebase
      .firestore()
      .collection('users')
      .doc(email)
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const _notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data()
          data['id'] = _doc.id
          return data
        })
        setNotes(_notes)
        // console.log(_notes)
      })
  }, [])

  // Update Firebase Firestore
  useEffect(() => {
    if (updatedNote != null) {
      firebase
        .firestore()
        .collection('users')
        .doc(email)
        .collection('notes')
        .doc(selectedNoteId).set({
          title: updatedNoteTitle,
          body: updatedNote
        }, {merge: true})
    }
  }, [updatedNoteTitle, updatedNote])

  // Removed <body> since there is already a body in the root HTML document
  return(
    <>

      <SnackBarMessage message={"Note Created"} toggle={snackBarToggle_NC} setSnackBarToggle={setSnackBarToggle_NC}/>
      <SnackBarMessage message={"Note Deleted"} toggle={snackBarToggle_ND} setSnackBarToggle={setSnackBarToggle_ND}/>

      {/* <SideNav className='sidenav' user={user} notes={notes} fetchLatestNotes={fetchLatestNotes}/>
      <div className='grid-container'>
        <Overview className='Overview' user={user} notes={notes} note={note} setNote={setNote} fetchLatestNotes={fetchLatestNotes}/>
        <Note className='Note' user={user} note={note} fetchLatestNotes={fetchLatestNotes}/>
      </div> */}
      <SideNav className='sidenav' createNewNote={createNewNote}/>
      <div className='grid-container'>
        <Overview className='Overview' notes={notes} selectedNoteId={selectedNoteId} selectNote={selectNote} deleteNote={deleteNote}/>
        
        {(selectedNote === null) ? (
          <EmptyNote/>
        ) : (
          <Note className='Note' note={selectedNote} setUpdatedNoteTitle={setUpdatedNoteTitle} setUpdatedNote={setUpdatedNote}/>
        )}

      </div>
    </>
  )
  
}

export default Dashboard;
import React, { useEffect, useState } from 'react';

const Note = ( {user, noteId} ) => {

  const [note, setNote] = useState(null)

  
  return(
    <div className="Note">
      {/* <p>{noteId}</p> */}
    </div>
  )
  
}

export default Note;
import "./Todo.css"
import React from 'react';
import { useState } from 'react'
import Note from '../Notes'

const NoteComponent = (props) => {

    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('a new note')
    const [showAll, setShowAll] = useState(true)
    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }
        if (noteObject != null) {

            setNotes(notes.concat(noteObject))
        }
        setNewNote('')
    }
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.filter(note => note.important === true).map(note =>
                    <Note key={note.id} note={note} />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}


const Notes = () => {

    return (
        <NoteComponent notes={notes} />
    );
}

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
]



export default Notes;
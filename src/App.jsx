import React, { useState, useEffect } from 'react';
import { NoteForm } from './components/NoteForm';
import { Note } from './components/Note';

export default function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('mis-notas');
    if (savedNotes) {
      return JSON.parse(savedNotes);
    } else {
      return []; // Arreglo vacío de entrada
    }
  });

  useEffect(() => {
    localStorage.setItem('mis-notas', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div>
      <h1>Post It Simulator!</h1>
      
      <NoteForm onAddNote={addNote} />

      {/* Regla*/}
      {notes.length === 0 ? (
        <div className="no-notes-container">
          <p>No hay notas. Por favor, llena el formulario para agregar una.</p>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map(note => (
            <Note 
              key={note.id} 
              note={note} 
              onDelete={deleteNote} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

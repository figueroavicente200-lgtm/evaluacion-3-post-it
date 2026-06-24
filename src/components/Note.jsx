import React from 'react';

export function Note({ note, onDelete }) {
  return (
    // Si la nota es importante, le añade la clase 'important' para pintarla roja
    <div className={`note ${note.important ? 'important' : ''}`}>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>X</button>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
    </div>
  );
}
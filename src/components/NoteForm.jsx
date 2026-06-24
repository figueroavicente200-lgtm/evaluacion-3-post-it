import React, { useState } from 'react';

export function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (description.trim() === '') {
      alert('El campo descripción es obligatorio.');
      return;
    }

    onAddNote({
      id: Date.now(), 
      title,
      description,
      important
    });

    setTitle('');
    setDescription('');
    setImportant(false);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Título (optativo)" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Descripción (obligatorio)" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <label>
        <input 
          type="checkbox" 
          checked={important} 
          onChange={(e) => setImportant(e.target.checked)} 
        /> Importante!
      </label>
      <button type="submit">AGREGAR</button>
    </form>
  );
}

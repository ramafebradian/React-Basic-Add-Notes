import React, { useState } from "react";

const AddNoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charCount, setCharCount] = useState(50);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
      setCharCount(50 - newTitle.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    onAddNote(newNote);
    setTitle("");
    setBody("");
  };

  return (
    <div className="add-note">
      <form onSubmit={handleSubmit}>
        <h2>Buat Catatan</h2>
        <input
          type="text"
          placeholder="Judul Catatan"
          value={title}
          onChange={handleTitleChange}
          maxLength="50"
        />
        <p>{charCount} karakter tersisa</p>
        <textarea
          placeholder="Isi Catatan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Tambah Catatan</button>
      </form>
    </div>
  );
};

export default AddNoteForm;

import React, { useState } from "react";
import { getInitialData } from "./utils/index";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
import NavBar from "./components/NavBar";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const handleSearchChange = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="app">
      <NavBar
        searchKeyword={searchKeyword}
        onSearchChange={handleSearchChange}
      />

      <AddNoteForm onAddNote={handleAddNote} />

      <h2>Catatan Aktif</h2>
      <NoteList
        notes={filteredNotes.filter((note) => !note.archived)}
        onDelete={handleDeleteNote}
        onArchive={handleArchiveNote}
      />

      <h2>Catatan Arsip</h2>
      <NoteList
        notes={filteredNotes.filter((note) => note.archived)}
        onDelete={handleDeleteNote}
        onArchive={handleArchiveNote}
      />
    </div>
  );
};

export default App;

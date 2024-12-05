import React from "react";
import { showFormattedDate } from "../utils/index";

const NoteItem = ({ note, onDelete, onArchive }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{showFormattedDate(note.createdAt)}</p>
      <div className="note-item-btn">
        <button onClick={() => onArchive(note.id)}>
          {note.archived ? "Kembalikan" : "Arsipkan"}
        </button>
        <button className="btn-del" onClick={() => onDelete(note.id)}>
          Hapus
        </button>
      </div>
    </div>
  );
};

export default NoteItem;

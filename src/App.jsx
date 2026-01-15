import Input from "./components/Input";
import AddNoteButton from "./components/AddNoteButton";
import Note from "./components/Note";
import { useEffect, useState } from "react";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
  });
  const [inputValue, setInputValue] = useState("");

  function addNote(content) {
    if (!content) return;
    const newNote = {
      id: notes.length + 1,
      content: content,
      completed: false,
    };
    setNotes([...notes, newNote]);
    setInputValue("");
  }
  function deleteNote(id) {
    setNotes((prev) => prev.filter((note) => note.id != id));
  }
  function toggleCompleted(id) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <Input value={inputValue} onChange={setInputValue} />
        <AddNoteButton onAdd={() => addNote(inputValue)} />
        <section>
          <h2 className="text-2xl font-bold mb-4 mt-4">Notes</h2>
          {notes.map((note) => (
            <Note
              key={note.id}
              content={note.content}
              completed={note.completed}
              onDel={() => deleteNote(note.id)}
              onComp={() => {
                toggleCompleted(note.id);
              }}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

import Input from "./components/Input";
import AddNoteButton from "./components/AddNoteButton";
import Note from "./components/Note";
import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
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

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }
  function onInputKeyDown(e) {
    if (e.key === "Enter") {
      addNote(inputValue);
    }
  }
  function deleteKeyNotes(e) {
    if (e.key === "Delete" && notes.length > 0) {
      deleteNote(notes[notes.length - 1].id);
    }
  }
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    window.addEventListener("keydown", deleteKeyNotes);
    return () => {
      window.removeEventListener("keydown", deleteKeyNotes);
    };
  }, [notes]);
  return (
    <main
      className={`flex justify-center items-center min-h-screen ${
        darkMode ? "dark" : ""
      } dark:bg-gray-700`}
    >
      <button
        onClick={toggleDarkMode}
        className="absolute right-3 top-3 cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div>
        <Input
          value={inputValue}
          onChange={setInputValue}
          onKey={onInputKeyDown}
        />
        <AddNoteButton onAdd={() => addNote(inputValue)} />
        <section>
          <h2 className="text-2xl font-bold mb-4 mt-4 dark:text-white">
            Notes
          </h2>
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

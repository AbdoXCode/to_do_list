import Input from "./components/Input";
import AddNoteButton from "./components/AddNoteButton";
import Note from "./components/Note";

export default function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <Input />
        <AddNoteButton />
        <section>
          <h2 className="text-2xl font-bold mb-4 mt-4">Notes</h2>
          <Note title="Sample Title" content="Sample content for the note." />
        </section>
      </div>
    </main>
  );
}

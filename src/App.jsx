import Input from "./components/Input";
import AddNoteButton from "./components/AddNoteButton";

export default function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <Input />
        <AddNoteButton />
      </div>
    </main>
  );
}

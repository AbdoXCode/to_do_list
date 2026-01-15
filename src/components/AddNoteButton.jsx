export default function AddNoteButton(props) {
  return (
    <button
      onClick={props.onAdd}
      className="bg-green-600 text-white border px-2 py-1 rounded-sm outline-0 hover:bg-green-700 hover:cursor-pointer"
    >
      Add Note
    </button>
  );
}

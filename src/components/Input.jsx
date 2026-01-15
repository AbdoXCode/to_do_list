export default function Input(props) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className="sm:w-sm border rounded-sm outline-0 px-2 py-1 m-2"
      placeholder="Enter your note"
    />
  );
}

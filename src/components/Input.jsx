export default function Input(props) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      onKeyDown={props.onKey}
      className="sm:w-sm border rounded-sm outline-0 px-2 py-2 m-2 dark:text-white dark:bg-gray-800 dark:border-gray-600"
      placeholder="Enter your note"
    />
  );
}

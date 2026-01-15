export default function Note(props) {
  return (
    <section>
      <article className="flex justify-between items-center max-w-120 border p-4 rounded-sm mb-4 shadow-sm hover:shadow-md transition-shadow duration-200 m-2 dark:border-gray-600">
        <p
          className={`text-gray-700 break-words dark:text-white dark:border-gray-600 ${
            props.completed ? "line-through" : ""
          }`}
        >
          {props.content}
        </p>
        <div>
          <button
            onClick={props.onComp}
            className="border-0 p-1 rounded-sm bg-green-700 hover:bg-green-800 cursor-pointer outline-0 mr-2 dark:bg-green-600 dark:hover:bg-green-700"
          >
            <svg
              className="w-5 h-5 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={props.onDel}
            className="border-0 p-1 rounded-sm bg-red-700 hover:bg-red-800 cursor-pointer outline-0 dark:bg-red-600 dark:hover:bg-red-700"
          >
            <svg
              className="w-5 h-5 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </article>
    </section>
  );
}

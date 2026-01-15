export default function Toast({ message }) {
  const iconConfig = {
    danger: {
      classes: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
      ),
    },
  };

  return (
    <div className="fixed bottom-3 right-3 z-50">
      <div
        className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
        role="alert"
      >
        <div
          className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg ${iconConfig.danger.classes}`}
        >
          {iconConfig.danger.icon}
          <span className="sr-only">danger icon</span>
        </div>

        <div className="ms-3 text-sm font-normal">{message}</div>
      </div>
    </div>
  );
}

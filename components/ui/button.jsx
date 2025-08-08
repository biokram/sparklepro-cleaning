export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-xl transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
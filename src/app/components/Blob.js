export const Blob = ({ className, children, loading }) => {
  return (
    <div
      className={`blob absolute bg-gradient-to-b from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 overflow-hidden ${className} ${
        loading ? "loading-blob" : ""
      }`}
    >
      {children}
    </div>
  );
};

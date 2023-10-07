export const Blob = ({ className, children }) => {
  return (
    <div
      className={`blob absolute bg-gradient-to-b from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

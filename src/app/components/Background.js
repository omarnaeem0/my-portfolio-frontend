import { Blob } from "./Blob";

export default function Background() {
  const commonClasses = "w-60 lg:w-96 h-60 lg:h-96 opacity-20";
  return (
    <div className="bg-gradient-to-b from-blue-100 to-violet-100 dark:bg-gradient-to-b dark:from-blue-950 dark:to-violet-950 w-screen h-screen fixed overflow-clip">
      <Blob className={`${commonClasses} top-10 right-10 scale-150`} />
      <Blob className={`${commonClasses} top-4 right-4`} />
      <Blob className={`${commonClasses} hidden md:block top-44 left-24 lg:-top-32 lg:left-0 scale-75`} />
      <Blob className={`${commonClasses} hidden md:block top-24 left-44 lg:-top-10 lg:left-20 scale-50`} />
      <Blob className={`${commonClasses} bottom-0 left-10 scale-150`} />
      <Blob className={`${commonClasses} -bottom-6 left-4`} />
      <Blob className={`${commonClasses} bottom-64 right-24 lg:-bottom-52 lg:right-0 scale-75`} />
      <Blob className={`${commonClasses} bottom-80 right-40 lg:-bottom-32 lg:right-20 scale-50`} />
      <div className="fixed w-screen h-screen backdrop-brightness-110 dark:backdrop-brightness-90" />
    </div>
  );
}

import Image from 'next/image';

export default function Skill(props) {
  const { title, src, className } = props;
  return (
    <>
      <Image data-tooltip-target={title} src={src} className={className || `h-14 lg:h-16 w-auto`} />
      <div id={title} role="tooltip" data-popper-placement="top" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-700 borderrounded-lg shadow-sm opacity-0 tooltip">
        {title}
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  )
}
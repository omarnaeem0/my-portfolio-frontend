export default function LinkIcon(props) {
  const { url, title, Icon } = props;
  return (
    <a href={url} target="_blank">
      <Icon data-tooltip-target={title} className="hover:text-blue-500" />
      <div
        id={title}
        role="tooltip"
        data-popper-placement="top"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-700 borderrounded-lg shadow-sm opacity-0 tooltip"
      >
        {title}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </a>
  );
}

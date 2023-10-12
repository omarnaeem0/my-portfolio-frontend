import * as AIIcons from "react-icons/ai";

export default function LinkIcon(props) {
  const { url, title, icon } = props;
  const Icon = AIIcons[icon];
  return (
    <a href={url} target="_blank">
      <Icon data-tooltip-target={title} className="hover:text-blue-500 focus:outline-none" />
      <div
        id={title}
        role="tooltip"
        data-popper-placement="top"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-xl shadow-sm opacity-0 tooltip"
      >
        {title}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </a>
  );
}

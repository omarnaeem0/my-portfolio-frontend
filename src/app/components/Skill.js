"use client";
import "flowbite";
import Image from "next/image";

export default function Skill(props) {
  const { title, imgUrl, className } = props;
  return (
    <>
      <Image
        data-tooltip-target={title}
        src={imgUrl}
        className={className || `h-14 lg:h-16 w-auto object-contain`}
        alt=""
        loading="lazy"
        width={60}
        height={60}
      />
      <div
        id={title}
        role="tooltip"
        data-popper-placement="top"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-xl shadow-sm opacity-0 tooltip"
      >
        {title}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}

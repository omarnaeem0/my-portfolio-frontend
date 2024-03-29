import LinkIcon from "../components/LinkIcon";
import introduction from "../constants/introduction";
import ProfileImage from "../components/ProfileImage";

export default function IntroductionSection() {
  return (
    <div className="flex justify-between flex-col md:flex-row items-center my-10 lg:my-20 max-w-5xl mx-auto md:px-8">
      <div className="max-w-sm lg:max-w-lg">
        <div className="text-center lg:py-4 flex flex-col items-center md:items-start">
          <h2 className="text-4xl lg:text-5xl py-2 lg:py-6 text-blue-500 font-medium">{introduction.name}</h2>
          <h3 className="text-xl max-w-sm lg:max-w-md lg:text-2xl py-2 text-gray-900 dark:text-white md:text-left">
            {introduction.jobTitle}
          </h3>
          <p className="max-w-md text-md lg:text-md py-5 leading-6 lg:leading-7 text-gray-800 dark:text-white md:text-left">
            {introduction.headline}
          </p>
        </div>
        <div className="text-3xl lg:text-4xl flex justify-center md:justify-start gap-10 lg:gap-12 py-2 text-gray-600 dark:text-gray-400">
          {introduction.links.map(link => (
            <LinkIcon key={link.url} {...link} />
          ))}
        </div>
      </div>
      <ProfileImage src={introduction.image} />
    </div>
  );
}

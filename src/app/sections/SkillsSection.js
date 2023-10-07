import Skill from "../components/Skill";
import skills from "../constants/skills";

export default function SkillsSection() {
  return (
    <div className="text-center lg:p-10 py-16">
      <h3 className="text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white">{skills.title}</h3>
      <p className="text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white">
        {skills.description}
      </p>
      <div className="flex flex-row justify-center gap-12 flex-wrap py-6 px-10 max-w-5xl m-auto">
        {skills.skills.map(skill => (
          <Skill key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
}

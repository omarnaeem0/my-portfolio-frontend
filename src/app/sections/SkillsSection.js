import Skill from '../components/Skill';
import constants from '../constants';

export default function SkillsSection() {
  return (
    <div className='text-center lg:p-10 py-16'>
      <h3 className='text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white'>{constants.skills.title}</h3>
      <p className='text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
        {constants.skills.description}
      </p>
      <div className='flex flex-row justify-center gap-12 flex-wrap py-6 px-10 max-w-5xl m-auto mt-4'>
        {constants.skills.skills.map(skill => (
          <Skill {...skill} />
        ))}
      </div>
    </div>
  )
}
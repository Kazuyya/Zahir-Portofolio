/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/unity.png',
    label: 'Unity',
    desc: 'Game engine'
  },
  {
    imgSrc: 'https://www.nicepng.com/png/full/321-3211558_unreal-logo-png-for-kids-unreal-engine-icon.png',
    label: 'Unreal Engine',
    desc: 'Game engine'
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_Aseprite.svg/640px-Logo_Aseprite.svg.png',
    label: 'Aseprite',
    desc: 'pixel art editor'
  },
  {
    imgSrc: 'https://cktechcheck.com/wp-content/uploads/2018/12/LOGO-BLENDER.png',
    label: 'Blender',
    desc: '3D software'
  },
  {
    imgSrc: '/images/github.png',
    label: 'Github',
    desc: 'collaborative software'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
        Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill
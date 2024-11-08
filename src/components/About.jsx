/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


const aboutItems = [
  // {
  //   label: 'Project done',
  //   number: 45
  // },
  // {
  //   label: 'Years of experience',
  //   number: 10
  // }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          Welcome!
          <br/><br/>I am a Junior Game Developer currently studying at SMKN 4 Malang, majoring in Software Engineering (RPL), and I am in the 11th grade (3rd semester). I am currently honing my skills in game programming and design, with a focus on Unity using C# and Unreal Engine through visual scripting (Blueprint).
          <br/><br/>As a developer who is always learning, I am committed to refining my technical and creative abilities to create innovative gaming experiences. I also highly value respect and etiquette in both my personal and professional life, ensuring that I approach every project with integrity and professionalism.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/z.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
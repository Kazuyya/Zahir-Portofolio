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
  //   number: 1.5
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
            Selamat Datang! <br></br><br></br> Saya seorang Junior Game Developer yang saat ini menempuh pendidikan di SMKN 4 Malang, jurusan Rekayasa Perangkat Lunak (RPL), kelas 11 (semester 3). Saat ini, saya sedang mengembangkan keterampilan dalam programming dan desain game, dengan fokus pada penggunaan Unity dengan C# dan Unreal Engine melalui visual scripting (Blueprint).<br></br><br></br>
            Sebagai developer yang terus belajar, saya berkomitmen untuk mengasah kemampuan teknis dan kreatif saya dalam menciptakan pengalaman permainan yang inovatif.
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
              src="/images/logo.svg"
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
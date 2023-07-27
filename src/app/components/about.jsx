import Image from "next/image"

const About = () => {
  return (
    <div className="flex pt-28 justify-between" id="about">
      <div className="w-1/2">
        <Image src="/aboutme-illustration.svg" alt="About Me" width={500} height={500} />
      </div>
      <div className="pt-24 text-lg px-4 w-1/2">
        <p className="text-3xl mb-4">About Me</p>
        <p className="mb-1">
          {
            "A Full Stack Developer. I'm currently pursuing Post Graduation in Master's of Computer Applications. I love creating beautiful things on the internet that are Clean & Minimal. "
          }
        </p>
        <p>
          {
            "Problem solver, curiosity driven, I have to know the why of everything. Happiest when I'm learning, building & contributing. When I'm away from my screen you'll find me reading, travelling."
          }
        </p>
        <p>{"Let's build cool things!"}</p>
      </div>
    </div>
  )
}

export default About

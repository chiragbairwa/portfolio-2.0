import Image from "next/image"

const About = () => {
  return (
    <div className="md:flex justify-between items-center pt-24" id="about">
      <div className="md:w-1/2">
        <Image src="/aboutme-illustration.svg" alt="About Me" width={550} height={550} />
      </div>
      <div className="text-lg pr-8 md:w-1/2">
        <p className="text-3xl mb-4">About Me</p>
        <p className="mb-1">
          {
            `A full-stack developer. I'm currently pursuing a postgraduate degree in Master's of Computer Applications. I love creating beautiful things on the internet that are Clean and Minimal.`
          }
          </p>
          <p>
          {
            `Problem solver and curiosity-driven, I have to know the why of everything. I'm happiest when I'm learning, building, and contributing. When I'm away from my screen, you'll find me reading or traveling.
            Let's build cool things!`
          }
        </p>
        <p>{"Let's build cool things!"}</p>
      </div>
    </div>
  )
}

export default About

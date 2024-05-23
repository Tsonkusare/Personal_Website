import React from 'react'

const skills = [
    {skill:"Java"},
    {skill:"Python"},
    {skill:"C++"},
    {skill:"SQL"},
    {skill:"HTML"},
    {skill:"JavaScript"},
    {skill:"TypeScript"},
    {skill:"Git"},
]
const tools = [
    {tool:"React"},
    {tool:"Next.js"},
    {tool:"Tailwind CSS"},
    {tool:"GitHub"},
    {tool:"Microsoft Excel"},
    {tool:"Microsoft Power BI"},
    {tool:"Microsoft Word"},
    {tool:"Microsoft PowerPoint"},
]
const About = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48 md:pl-16 md:pr-16'>
            <h1 className='text-center font-bold text-4xl mb-5'>
                About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-color1 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
                <div className='md:w-1/2'>
                    <h1 className='text-color2 font-boutline-1 text-center font-bold text-3xl mb-6'>
                        Welcome to My World!
                    </h1>
                    <p>
                        My name is{" "}
                        <span className='font-bold text-color1'>
                            Tarang Sonkusare
                        </span>, and I'm currently charting my course as an{" "}
                        <span className='font-bold text-color1'>
                            Undergraduate Student{" "}
                        </span>
                        at the{" "} 
                        <span className='font-bold text-color1'>
                            University of North Carolina in Charlotte
                        </span>, diving deep into the exciting field of{" "} 
                        <span className='font-bold text-color1'>
                            Computer Science{" "}
                        </span>
                        with a special emphasis on{" "}
                        <span className='font-bold text-color1'>
                            Artificial Intelligence, Gaming, and Robotics
                        </span>.
                    </p>
                    <p>
                        Beyond the realms of academia and technology, I pride myself on my ability to{" "}
                        <span className='font-bold text-color1'>
                            anticipate, strategize, and tackle challenges head on.{" "}
                        </span> As a practical thinker, I approach problems with a solution-oriented mindset, always seeking efficient and effective ways to overcome obstacles and achieve my goals. But don't let the serious tone fool you! I also have a playful side that comes out to play when it's time to unwind. Whether it's cracking jokes with friends, exploring new hobbies, or simply letting loose on the{" "} <span className='font-bold text-color1'>tennis{" "}</span> court, I believe in balancing hard work with a healthy dose of fun. In fact, my love for playing tennis isn't just about winning matches—it's about the thrill of competition, the joy of camaraderie, and the sheer fun of chasing after that elusive ace. After all, life is too short to take too seriously, and I firmly believe that laughter and lightheartedness are essential ingredients for a fulfilling and well-rounded existence.
                    </p>
                    <p className = "font-bold text-color1">
                        I invite you to join me on this journey as we explore the fascinating realms of AI, gaming, robotics, and the pursuit of a well-rounded lifestyle.
                    </p>
                </div>
                <div className='text-2xl sm:text md:w-1/2'> 
                    <h1 className='text-color1 text-center font-bold text-3xl mb-6'>My Skill!</h1>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {skills.map((item, idx) => {
                            return (<p key={idx} className="bg-color2 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold">{item.skill}</p>)
                        })}
                    </div>
                    <hr className="w-6 h-1 mx-auto my-4 border-0 rounded"></hr>
                    <h1 className='text-color1 text-center font-bold text-3xl mb-6'>Tools!</h1>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {tools.map((item, idx) => {
                            return (<p key={idx} className="bg-color2 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold">{item.tool}</p>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
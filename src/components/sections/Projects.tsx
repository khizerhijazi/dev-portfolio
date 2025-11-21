import Heading from "../ui/Heading"
import ProjectsBox from "../ui/ProjectsBox"

const projectsData = [
    {
        id: 0,
        src: "/assets/images/Partout.png",
        alt: "Partout",
        link: "https://www.partout.com/",
    },
    {
        id: 1,
        src: "/assets/images/Vidiren official.png",
        alt: "Vidiren",
        link: "https://vidiren.com/",
    },
    {
        id: 2,
        src: "/assets/images/Yaknia.png",
        alt: "Yaknia",
        link: "https://yaknia.com/",
    },
    {
        id: 3,
        src: "/assets/images/Mindworks.png",
        alt: "Mindworks",
        link: "https://mindworks.org/",
    },
    {
        id: 4,
        src: "/assets/images/Make.png",
        alt: "Make",
        link: "https://www.make.com/en",
    },
    {
        id: 5,
        src: "/assets/images/Keak.png",
        alt: "Make",
        link: "https://keak.com/",
    }
]

function Projects() {
    return (
        <section className="md:py-[125px] py-[70px]">
            <div className="container">
                <Heading className="mb-[30px]">Projects I've Built</Heading>
                <p className="mb-[30px] sm:mb-[70px] text-[18px] leading-[1.7] font-medium text-textLight dark:text-textDark dark:font-normal">
                    I have a proven track record of building projects from the ground up, including SaaS applications. My process emphasizes thorough planning and user-centric design. I start by collaborating with stakeholders to understand business needs and user goals. Then, I focus on information architecture and design, creating wireframes and UI designs that ensure a seamless user experience (UX). Next, I build MVPs followed by the development of the full product using Frontend, Backend and Database and Deployment. Finally, I prioritize performance optimization and ensure applications are production-ready.
                </p>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-5">
                    {projectsData.map(item => {
                        return <ProjectsBox src={item.src} alt={item.alt} link={item.link} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
import SkillBox from "@/components/ui/SkillBox";

const skills1 = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Zustand",
    "Tailwind CSS",
    "Framer Motion",
    "DOM",
    "Unit Test",
    "Performance Optimization",
    "SSR"
]

const skills2 = [
    "Node",
    ".NET Core",
    "ASP.NET Core",
    "Bun",
    "Express",
    "Rest API",
    "Validation",
    "JWT/OAuth",
    "SQL",
    "Postgres",
    "Prisma ORM",
    "EF Core",
    "DB Modeling",
    "Stripe Payments"
];

const skills3 = [
    [
        "JavaScript",
        "TypeScript",
        "Python",
        "C#",
        "Go",
    ],
    [
        "React Native",
        "Git",
        "Github",
        "Linux",
        "WordPress",
        "VPS",
        "Vercel",

    ],
    [
        "UX/UI Design",
        "Product design",
        "Figma",
        "Adobe XD",
        "Wireframe"
    ]
];

function Skills() {
    return (
        <section className="md:py-[125px] py-[70px] gsap-menu-scroller" id="Skills">
            <div className="container">
                <div className="relative pb-[155px]">
                    <h2 className="text-textLight dark:text-textDark md:px-[70px] px-[40px] md:py-[20px] py-[10px]  border-borderBlack border-4 rounded-md flex justify-center w-fit mx-auto text-center md:text-[25px] text-[20px] uppercase font-bold dark:bg-[#000]">My Skills</h2>
                    <img src="/assets/icons/skillTree.svg" alt="" className="text-center mx-auto absolute left-0 z-[-1] right-0 md:max-w-full max-w-[600px] md:w-fit w-full" />
                </div>
                <div className="grid items-start gap-x-[60px] gap-y-[80px] md:gap-[100px]">
                    <div className="flex col-span-1 flex-wrap justify-start items-start gap-x-[15px] gap-y-[20px]">
                        {skills1.map(item => (
                            <SkillBox key={item}>{item}</SkillBox>
                        )
                        )}
                    </div>
                    <div className="flex col-span-1 flex-wrap justify-start items-start gap-x-[15px] gap-y-[20px]">
                        {skills2.map(item => (
                            <SkillBox key={item}>{item}</SkillBox>
                        )
                        )}
                    </div>
                    <div className="col-span-2 flex flex-col gap-[20px]">
                        {skills3.map((item, index) => (
                            <div key={index} className="flex flex-wrap justify-start items-start gap-x-[15px] gap-y-[20px]">
                                {
                                    item.map(box => (
                                        <SkillBox key={box}>{box}</SkillBox>
                                    ))
                                }
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
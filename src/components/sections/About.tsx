import Button from "@/components/ui/Button"
import Heading from "@/components/ui/Heading"

const aboutInfo = [
    "8+ YEARS ONLINE EXPERIENCE AS A FULL STACK DEVELOPER.",

    "I'm a full-stack developer with over 8 years of experience, specializing in creating dynamic and responsive web solutions. My expertise includes a wide range of front-end technologies, including HTML, CSS, SASS/LESS, React.js, Vue.js, and AngularJS. On the back-end side, I'm proficient in Node.js, PHP, and frameworks such as Symfony, Laravel, and I have a strong foundation in MySQL.",

    "Additionally, I'm skilled in managing content with CMS platforms like WordPress, Shopify, and Drupal, ensuring that each project's requirements are effectively met. My DevOps skills are top-notch, with extensive experience in GitHub, AWS, and Google Cloud, which helps in streamlining project deployment and management. I also have a keen eye for design, skillful in using tools like Figma, Photoshop, and Illustrator to create visually stunning user interfaces."
    // "Currently, I'm passionate about GoLang (especially the Gin Framework) and fascinated by the advancements in artificial intelligence and its potential for positive impact. I have a strong desire and aptitude for continuous learning.",
    // "I'm a quick learner with a proven track record of achieving exceptional frontend performance."
]

function About() {
    return (
        <>
            <section className="md:py-[125px] py-[70px] gsap-menu-scroller" id="About">
                <div className="container flex md:flex-row flex-col md:items-center items-start gap-[50px]">
                    <div className="flex-[2]">
                        <Heading className="mb-[30px]">
                            About Me
                        </Heading>
                        {aboutInfo.map((item, index) => (
                            <p key={index} className="mb-[30px] text-[18px] leading-[1.7] font-medium text-textLight dark:text-textDark dark:font-normal">{item}</p>
                        ))}
                        <Button href="https://www.linkedin.com/" target="_blank">Open Linkedin</Button>
                    </div>
                    <div className="flex-[1]">
                        <img src="/assets/images/me.jpg" alt="me" className="object-cover rounded-[10px] w-[300px] ml-auto max-h-[370px]" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
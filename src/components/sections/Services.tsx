import Heading from "@/components/ui/Heading"
import ServicesBox from "@/components/ui/ServicesBox"

const services = [
    {
        id: 0,
        icon: "/assets/icons/plan.svg",
        heading: "Business Planning",
        paragraph: "can help with analyzing, sketching and planning your business idea using our own framework"
    },
    {
        id: 1,
        icon: "/assets/icons/branding.svg",
        heading: "Branding & Identity",
        paragraph: "can help create your branding kits including logos, letterhead, and others identity assets"
    },
    {
        id: 2,
        icon: "/assets/icons/brush.svg",
        heading: "UX/UI Design",
        paragraph: "can help with web or mobile app user research, architecture, wireframe, ui design in figma"
    },
    {
        id: 3,
        icon: "/assets/icons/code.svg",
        heading: "Web Application Develop",
        paragraph: "can help build web apps using html css javascript typescript and backend using node and .net core"
    },
    {
        id: 4,
        icon: "/assets/icons/cms.svg",
        heading: "CMS Customization",
        paragraph: "can help customize wordpress, shopify and other cms platforms including themes and plugins"
    },
    {
        id: 5,
        icon: "/assets/icons/projects.svg",
        heading: "Project Management",
        paragraph: "can help manage your projects using monday, asana, jira, trello, clickup and other pm software"
    },
    {
        id: 6,
        icon: "/assets/icons/crossPlatform.svg",
        heading: "Cross-Platform Application",
        paragraph: "can help build cross-platform desktop apps for windows, mac, linux, android and ios"
    },
]

function Services() {
    return (
        <section className="md:py-[125px] py-[70px] gsap-menu-scroller" id="Services">
            <div className="container">
                <Heading className="mb-[30px]">
                    Services I Provide
                </Heading>
                <p className="leading-[1.7] text-[18px] mb-[50px] md:mb-[70px] font-medium dark:font-normal  text-textLight dark:text-textDark">With 9 years of experience as a designer and developer, I have worked with many clients worldwide, built numerous web, mobile, and desktop applications, managed various projects, and run ads on social media.</p>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5">
                    {services.map(item => <ServicesBox key={item.id} icon={item.icon} heading={item.heading} paragraph={item.paragraph} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Services
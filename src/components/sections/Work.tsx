import Heading from '@/components/ui/Heading'
import WorkBox from '@/components/ui/WorkBox'
import { useState } from "react"

const exp = [
    {
        year: "2022",
        title: "Full Stack Developer",
        location: "Belivup Technology",
        duration: "2y",
        link: "https://www.upwork.com/",
        country: "bangladesh",
        type: "on-site",
        details: `<p>Built full-stack web application - <a target="_blank" href="https://iconview.org">iconview.org</a> using React &amp; Nextjs<br>• 100k+ icons for React &amp; Nextjs with NPM Package <br>• 4000+ SEO Indexed Pages + Server Side Rendering <br>• 100% Performance, SEO and Accessibility Score <br>• Includes authentication, subscriptions, stripe payment integrations<br>Building web, mobile &amp; desktop applications. Working with SAAS products and services using cutting-edge technologies </p>`
    },
    {
        year: "2021",
        title: "UX/UI Designer",
        location: "Tic Digital Marketing",
        duration: "2y",
        link: "https://www.upwork.com/",
        country: "New York, USA",
        type: "remote",
        details: `<p>Built full-stack web application - <a target="_blank" href="https://iconview.org">iconview.org</a> using React &amp; Nextjs<br>• 100k+ icons for React &amp; Nextjs with NPM Package <br>• 4000+ SEO Indexed Pages + Server Side Rendering <br>• 100% Performance, SEO and Accessibility Score <br>• Includes authentication, subscriptions, stripe payment integrations<br>Building web, mobile &amp; desktop applications. Working with SAAS products and services using cutting-edge technologies </p>`
    },
    {
        year: "2018",
        title: "Head of Designer & Developer",
        location: "Flexible Magnets",
        duration: "3y",
        link: "https://www.upwork.com/",
        country: "New York, USA",
        type: "remote",
        details: `<p>Built full-stack web application - <a target="_blank" href="https://iconview.org">iconview.org</a> using React &amp; Nextjs<br>• 100k+ icons for React &amp; Nextjs with NPM Package <br>• 4000+ SEO Indexed Pages + Server Side Rendering <br>• 100% Performance, SEO and Accessibility Score <br>• Includes authentication, subscriptions, stripe payment integrations<br>Building web, mobile &amp; desktop applications. Working with SAAS products and services using cutting-edge technologies </p>`
    },
    {
        year: "2017",
        title: "Freelancer Designer & Developer",
        location: "Upwork",
        duration: "5y",
        link: "https://www.upwork.com/",
        country: "bangladesh",
        type: "freelance",
        details: `<p>Built full-stack web application - <a target="_blank" href="https://iconview.org">iconview.org</a> using React &amp; Nextjs<br>• 100k+ icons for React &amp; Nextjs with NPM Package <br>• 4000+ SEO Indexed Pages + Server Side Rendering <br>• 100% Performance, SEO and Accessibility Score <br>• Includes authentication, subscriptions, stripe payment integrations<br>Building web, mobile &amp; desktop applications. Working with SAAS products and services using cutting-edge technologies </p>`
    }
]

function Work() {
    const [isOpen, setIsOpen] = useState<number | null>(0)

    const handleToggle = (index: number) => {
        setIsOpen(index);
    };


    return (
        <section className="md:py-[125px] py-[70px] gsap-menu-scroller" id='Work'>
            <div className="container">
                <Heading className='mb-[30px]'>
                    My Work Journey
                </Heading>
                <p className="leading-[1.7] text-[18px] md:mb-[70px] mb-[50px] font-medium dark:font-normal text-textLight dark:text-textDark">My career in full-stack development is marked by versatility, creativity, and a drive for excellence across a wide range of web development projects.</p>
                <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-[50px]">
                    {exp.map((item, index) => {
                        return (
                            <WorkBox
                                onToggle={() => handleToggle(index)}
                                key={index}
                                link={item.link}
                                year={item.year}
                                title={item.title}
                                location={item.location}
                                duration={item.duration}
                                country={item.country}
                                type={item.type}
                                isOpen={isOpen === index}
                                details={item.details}
                                className=""
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Work
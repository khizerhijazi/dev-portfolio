import Button from "@/components/ui/Button"
import Heading from "@/components/ui/Heading"
import SocialsBox from "@/components/ui/SocialsBox"

function Contact() {
    return (
        <section className="md:pt-[125px] pt-[70px] pb-[160px] gsap-menu-scroller" id="Contact">
            <div className="container max-w-[755px]">
                <Heading className="text-center mb-[30px]">Get in Touch</Heading>
                <p className="leading-[1.7] text-[18px] mb-[50px] font-medium dark:font-normal text-textLight dark:text-textDark text-center">I'm eager to join a collaborative team where I can contribute my skills and learn from others. If you have an exciting project, let's discuss how I can be a valuable asset. I'm actively seeking a new opportunity to apply my skills and continue growing!</p>
                <Button href="mailto:test@test.com" className="mb-[50px] w-fit mx-auto flex">Say Hello</Button>
                <SocialsBox/>
            </div>
        </section>
    )
}

export default Contact
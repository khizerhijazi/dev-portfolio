import Heading from "@/components/ui/Heading"

interface ServicesBoxProps {
    icon: string,
    heading: string,
    paragraph: string
}

function ServicesBox({icon, heading, paragraph}: ServicesBoxProps) {
    return (
        <div className="p-2 gap-5 min-h-[250px] justify-center items-center flex flex-col bg-secondarybgLight border-transparent transition duration-300 dark:bg-secondarybgDark border-[5px] rounded-[5px]hover:border-iconHoverLight dark:hover:border-iconHoverDark">
            <img className="h-[35px] w-fit" src={icon} alt="icon" height={35}/>
            <Heading className="text-center font-semibold lg:text-[22px] md:text-base sm:text-base text-[20px]">
                {heading}
            </Heading>
            <p className="leading-[1.7] font-medium dark:font-normal text-textLight dark:text-textDark text-[18px] text-center">{paragraph}</p>
        </div>
    )
}

export default ServicesBox
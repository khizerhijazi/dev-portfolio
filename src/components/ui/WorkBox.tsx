import Heading from "@/components/ui/Heading"


interface WorkBoxProps {
    year: string,
    title: string,
    location: string,
    duration: string,
    country: string,
    type: string,
    isOpen: boolean,
    details: string,
    link: string,
    onToggle: ()=> void,
    className?: string
}

function WorkBox({ year, title, location, duration, country, type,link, isOpen, onToggle, details, className }: WorkBoxProps) {

    return (
        <div onClick={onToggle} className={`cursor-pointer flex flex-col rounded-[5px] bg-secondarybgLight dark:bg-secondarybgDark overflow-hidden ${className}`}>
            <div className="flex">
                <h3 className="bg-iconbgLight dark:bg-iconbgDark sm:flex hidden  min-w-[100px] text-textLight dark:text-textDark justify-center text-lg items-center text-clip">{year}</h3>
                <div className='flex justify-between w-full px-5 py-6'>
                    <div className="flex flex-col gap-[12px] ">
                        <Heading className='font-semibold lg:text-[22px]  md:text-[22px] sm:text-[22px] text-[22px]'>
                            {title}
                        </Heading>
                        <p className="text-textLight dark:text-textDark font-medium dark:font-normal leading-none  text-[18px]"> 
                            at <a href={link} className="hover:text-hyperlink" target="_blank">{location}</a>
                        </p>
                        <span className="text-textLight dark:text-textDark font-medium dark:font-normal leading-none  text-[18px]">{duration} / {country} - {type}</span>
                    </div>
                        <img src="/assets/icons/down.svg" alt="open and close accordion" width={20} />
                </div>
            </div>
            <div className="w-full">
                {isOpen ? (
                    <div dangerouslySetInnerHTML={{__html: details}}  className="px-5 py-[15px] text-[18px] font-medium dark:font-normal leading-[1.7] text-textLight dark:text-textDark ">
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default WorkBox
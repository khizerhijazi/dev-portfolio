interface SocialsBoxProps {
    className?: string
}
import { twMerge } from 'tailwind-merge';

function SocialsBox({ className }: SocialsBoxProps) {
    return (
        <ul className={twMerge('flex justify-center w-fit items-center mx-auto gap-[5px] p-[10px] bg-secondarybgLight dark:bg-secondarybgDark rounded-[10px]', className)}>
            <li ><a target="_blank" className="p-[10px] transition duration-75 hover:bg-iconbgLight dark:hover:bg-iconbgDark rounded-[10px] w-[37px] h-[37px] flex items-center" href="https://www.linkedin.com"><img src="/assets/icons/Linkedin_Fab.cffcdc42.svg" alt="linkedin" /></a></li>
            <li ><a target="_blank" className="p-[10px] transition duration-75 hover:bg-iconbgLight dark:hover:bg-iconbgDark rounded-[10px] w-[37px] h-[37px] flex items-center" href="https://www.linkedin.com"><img src="/assets/icons/Github_Fab.44cca2ac.svg" alt="github icon with link" />
            </a></li>
            <li ><a target="_blank" className="p-[10px] transition duration-75 hover:bg-iconbgLight dark:hover:bg-iconbgDark rounded-[10px] w-[37px] h-[37px] flex items-center" href="https://www.linkedin.com"><img src="/assets/icons/Facebook_Fab.b7231ba0.svg" alt="facebook icon with link" />
            </a></li>
            <li ><a target="_blank" className="p-[10px] transition duration-75 hover:bg-iconbgLight dark:hover:bg-iconbgDark rounded-[10px] w-[37px] h-[37px] flex items-center" href="https://www.linkedin.com"><img src="/assets/icons/Youtube_Fab.1577665f.svg" alt="youtube icon with link" />
            </a></li>
            <li ><a target="_blank" className="p-[10px] transition duration-75 hover:bg-iconbgLight dark:hover:bg-iconbgDark rounded-[10px] w-[37px] h-[37px] flex items-center" href="https://www.linkedin.com"><img src="/assets/icons/Whatsapp_Fab.5240ba78.svg" alt="whatsapp icon with link" />
            </a></li>
        </ul>
    )
}

export default SocialsBox
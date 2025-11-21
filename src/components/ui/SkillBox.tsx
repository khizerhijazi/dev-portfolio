import { ReactNode } from 'react';

interface SkillBoxProps {
    children: ReactNode;
}

function SkillBox({ children }: SkillBoxProps) {
    return (
        <div className='xs:px-[18px] px-[10px] xs:py-[8px] py-[5px] outline-2 outline dark:bg-skills-gradient-dark bg-skills-gradient outline-iconbgLight dark:outline-iconbgDark rounded-[5px] transition-all border-2 border-white  dark:border-skillsStrokeDark text-skillsText xs:text-[17px] text-[13px] font-medium dark:text-cyan hover:bg-title-gradient dark:hover:text-white dark:hover:bg-title-gradient uppercase leading-none tracking-[1.1px]'>{children}</div>
    )
}

export default SkillBox
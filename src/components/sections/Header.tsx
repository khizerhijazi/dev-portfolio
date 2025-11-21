import ButtonBase from "../ui/ButtonBase"
import bars from '/assets/icons/bars.svg'
import close from '/assets/icons/close.svg'
import moon from '/assets/icons/moon.svg'
import sun from '/assets/icons/sun.svg'
import React from "react"
import { useTheme } from '@/contexts/ThemeContext';
import SocialsBox from "@/components/ui/SocialsBox"


function Header() {
    const { isLight, setIsLight } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const { activeSection } = useTheme();

    const navlistStyling = 'flex gap-5 text-textLight dark:text-textDark before:w-[30px] before:h-[3px] before:bg-primaryDarklightText dark:before:bg-primaryLightDarkText tracking-[1px] items-center uppercase text-[14px] font-semibold '

    return (
        <>
            <header className="bg-secondarybgLight z-10 fixed w-full top-0 flex items-center dark:bg-secondarybgDark min-h-[60px] sm:min-h-[80px]">
                <div className="container flex items-center justify-between md:px-10 px-2">
                    <div className="flex gap-2 sm:gap-5 items-center">
                        <ButtonBase onClick={() => { setIsMenuOpen(prev => !prev) }}>
                            {isMenuOpen ? (
                                <img src={close} alt="Menu" width={21} height={17} />
                            ) : (
                                <img src={bars} alt="Close" width={21} height={21} />
                            )}
                        </ButtonBase>
                        <a href="#" className="font-bold text-[22px] sm:text-[28px] flex gap-[2px] sm:gap-[5px] " >
                            <span className="text-green">{'{'}</span>
                            <h2 className=" bg-logo-gradient bg-clip-text  text-fill-transparent text-green">shay khan</h2>
                            <span className="text-green">{`}`}</span>
                        </a>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <ButtonBase onClick={() => {
                            setIsLight(prev => !prev); 
                        }
                        }>
                            {isLight ? (
                                <img src={moon} className="sm:w-[22px]" alt="Menu" width={22} height={22} />
                            ) : (
                                <img src={sun} className="sm:w-[22px]" alt="Close" width={22} height={22} />
                            )}
                        </ButtonBase>
                        <ButtonBase className="uppercase text-textLight dark:text-textDark font-semibold sm:text-sm text-[12px] tracking-[1.7px]" target="_blank" href="assets/sample.pdf">
                            resume
                        </ButtonBase>
                    </div>
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute shadow-menu-shadow top-[100px] left-5 rounded-[5px] overflow-hidden bg-secondarybgLight dark:bg-secondarybgDark  `}>
                    <nav className="p-[30px] pb-0">
                        <ul className="flex flex-col gap-5">
                            <li>
                                <a href="#Services" className={`${activeSection === 'Services' ? "before:w-[50px] before:bg-logo-gradient dark:text-white text-black" : ""} ${navlistStyling}`}>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#About" className={`${activeSection === 'About' ? "before:w-[50px] before:bg-logo-gradient dark:text-white text-black" : ""} ${navlistStyling}`}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#Skills" className={`${activeSection === 'Skills' ? "before:w-[50px] before:bg-logo-gradient dark:text-white text-black" : ""} ${navlistStyling}`}>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#Work" className={`${activeSection === 'Work' ? "before:w-[50px] before:bg-logo-gradient dark:text-white text-black" : ""} ${navlistStyling}`}>
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#Contact" className={`${activeSection === 'Contact' ? "before:w-[50px] before:bg-logo-gradient dark:text-white text-black" : ""} ${navlistStyling}`}>
                                    Get in touch
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <SocialsBox className="bg-none dark:bg-none p-0 px-[22.5px] mt-[41px] mb-[25px]" />
                    <div className="px-5 py-[10px] bg-iconbgLight dark:bg-iconbgDark">
                        <p className="text-sm font-medium text-textLight dark:text-textDark">Coded by Shay Khan</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
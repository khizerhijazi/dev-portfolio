import { ReactNode } from 'react';

interface ButtonProps {
    href?: string;
    onClick?: () => void;  // Updated type for click handler
    className?: string;
    target?: string;
    children: ReactNode;
}

function Button({ href, onClick,className,target, children }: ButtonProps) {
    if (href) {
        return <a href={href} className={`py-[15px] px-[25px] text-[18px] bg-gradient-to-r from-[#239982] to-[#6d64d3] bg-clip-text text-transparent hover:text-white text-fill-transparent hover:text-fill-none font-semibold relative after:rounded-[5px] rounded-[5px] custom-border-mask after:absolute after:w-full after:h-full after:left-0 after:top-0 after:p-[2px] hover:bg-black dark:hover:text-black dark:hover:bg-white transition duration-200 hover:translate-y-[-10px] hover:after:bg-black hover:after:opacity-0 hover:bg-clip-none hover:bg-none hover:bg-clip-none ${className}`} target={target} onClick={onClick}>{children}</a>; 
    }

    return (
        <button onClick={onClick}  className={`py-[15px] px-[25px] text-[18px] bg-gradient-to-r from-[#239982] to-[#6d64d3] bg-clip-text text-transparent hover:text-white text-fill-transparent hover:text-fill-none font-semibold relative after:rounded-[5px] rounded-[5px] custom-border-mask after:absolute after:w-full after:h-full after:left-0 after:top-0 after:p-[2px] hover:bg-black dark:hover:text-black dark:hover:bg-white transition duration-200 hover:translate-y-[-10px] hover:after:bg-black hover:after:opacity-0 hover:bg-clip-none hover:bg-none hover:bg-clip-none ${className}`}>
            {children}
        </button>
    );
}

export default Button;


// font-size: 18px;
// font-style: normal;
// font-weight: 600;
// line-height: 150%;
// transition: all .2s;
// display: flex;
// padding: 15px 25px;
// justify-content: center;
// align-items: center;
// background: var(--Title-Gradient, linear-gradient(90deg, #239982 -1.88%, #6d64d3 104.56%));
// background-clip: text;
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// z-index: 12;
// position: relative;
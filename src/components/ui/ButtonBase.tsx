import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';


interface ButtonBaseProps {
    href?: string;
    onClick?: () => void;  // Updated type for click handler
    className?: string;
    target?: string;
    children: ReactNode;
}

function ButtonBase({ href, onClick,className,target, children }: ButtonBaseProps) {
    if (href) {
        return <a href={href} className={twMerge(`bg-iconbgLight hover:bg-iconHoverLight dark:hover:bg-iconHoverDark flex justify-center transition  items-center min-w-[35px] sm:min-w-[45px] sm:min-h-[45px] min-h-[35px] dark:bg-iconbgDark py-1 px-[5px] sm:px-[10px] sm:p-[10px] text-sm rounded-md duration-300`, className)} target={target} onClick={onClick}>{children}</a>; 
    }

    return (
        <button onClick={onClick}  className={twMerge(`bg-iconbgLight hover:bg-iconHoverLight dark:hover:bg-iconHoverDark flex justify-center transition  items-center min-w-[40px] sm:min-w-[45px] sm:min-h-[45px] min-h-[35px] dark:bg-iconbgDark py-1 px-[5px] sm:px-[10px] sm:p-[10px] text-sm rounded-md duration-300`, className)}>
            {children}
        </button>
    );
}

export default ButtonBase;

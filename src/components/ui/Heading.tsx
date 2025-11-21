import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
    className?: string;
    children: ReactNode;
}

const Heading = ({ className, children }: HeadingProps) => {
    return (
        <h2 className={twMerge(
            'lg:text-3xl md:text-[45px] sm:text-[39px] text-[33px] font-bold leading-[110%] bg-gradient-to-r from-[#239982] to-[#6d64d3] bg-clip-text text-transparent',
            className
        )}>
            {children}
        </h2>
    );
};

export default Heading;

import {  useRef, useEffect, useState } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type'

gsap.registerPlugin(useGSAP);

function SiteLoader() {
    const [isLoading, setIsLoading] = useState(true)

    const nameRef = useRef(null)
    const nameRefContainer = useRef(null)

    useEffect(() => {
        if (nameRef.current) {
            SplitType.create(nameRef.current, { types: 'chars' })
        }
        gsap.to(".nameAnimation .char", {
            opacity: 0.7,
            stagger: 0.1,
            duration: 1,
            onComplete: ()=> setIsLoading(false)
        })
        
    }, [isLoading])

    if (!isLoading) {
        return null; // Or you can return a loading indicator here if desired
    }

    return (
        <div ref={nameRefContainer} className='fixed z-20 bg-dark bg-primarybgDark w-full h-full overflow-hidden flex justify-center items-center'>
            <p ref={nameRef} className="text-textDark nameAnimation font-kerning-none char-0-1-inner sm:text-2xl text-[40px] font-bold tracking-widest">samuel khan</p>
        </div>
    )
}

export default SiteLoader
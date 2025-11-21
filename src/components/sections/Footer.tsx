import Heading from "@/components/ui/Heading"

function Footer() {
  return (
    <footer className="md:pb-[125px] pb-[70px] text-center text-[18px] font-medium dark:font-normal text-textLight dark:text-textDark">
      <div className="container">
        Designed and Coded by <Heading className="text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] inline-block font-medium">Samuel Khan</Heading>. Built with React, Tailwind and GSAP.
      </div>
    </footer>
  )
}

export default Footer
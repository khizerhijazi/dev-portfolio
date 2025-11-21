import Button from "@/components/ui/Button"
import Heading from "@/components/ui/Heading"

function Banner() {
  return (
    <section>
      <div className="flex container justify-between md:items-center items-start md:h-screen sm:pt-[230px] pt-[200px] md:pt-[100px] md:pb-[50px] pb-[60px] gap-[50px] md:gap-[200px] min-h-[700px] gsap-menu-scroller md:flex-row flex-col " id="Banner">

        <div className="flex-[2] flex flex-col items-start gap-[50px]">

          <div className="">
            <h1 className="lg:text-2xl md:text-[40px] text-lg text-primaryDarklightText dark:text-primaryLightDarkText font-semibold">Frontend Engineer +</h1>
            <Heading>
              Full-stack Developer
            </Heading>
          </div>

          <p className="leading-[1.7] font-medium dark:font-normal text-textLight dark:text-textDark text-base">Frontend Engineer using HTML, CSS, JavaScript, TypeScript, React, and Nextjs. Backend using Node, .NET Core, Express, SQL, Postgres & Prisma and Deploy. Trust in my expertise for high-end design and development.</p>

          <Button target="_blank" href="/assets/sample.pdf">
            Open Resume
          </Button>

        </div>

        <div className="flex-1 flex sm:justify-end justify-start">
          <div className="sm:w-[330px] h-[350px] sm:min-w-fit min-w-[300px] less-than-20px max-w-[330px] relative after:top-[15px] after:rounded-[5px] after:z-[-1] after:left-[20px] custom-border-mask after:absolute after:w-full after:h-full after:p-[5px]">
            <img src="/assets/images/me.jpg" className="rounded-[5px] max-w-full w-full h-full sm:h-[340px] object-cover" alt="dev image" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Banner
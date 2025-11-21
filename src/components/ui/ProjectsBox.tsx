
interface ProjectsBoxProps {
    src: string,
    alt?: string,
    link: string,
}



function ProjectsBox({src, alt,link}: ProjectsBoxProps) {
  return (
    <div className="border-[5px] border-transparent overflow-hidden rounded-[10px] hover:border-iconHoverLight transition dark:hover:border-iconHoverDark relative sm:max-h-[160px] max-h-[210px]">
        <img src={src} alt={alt} className="object-cover h-full w-full" />
        <div className="absolute flex w-full opacity-0 hover:opacity-100 transition bg-workBoxHover h-full justify-center  items-center gap-2 m-auto inset-0">
            <a href={link} className="text-black text-[18px] font-normal dark:text-white hover:text-hyperlink dark:hover:text-hyperlink hover:underline dark:hover:underline" target="_blank">Live site</a>
        </div>
    </div>
  )
}

export default ProjectsBox
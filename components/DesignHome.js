import Image from "next/image";

export default function DesignHome() {

    const projects = [
        {
            image: "/images/design/flyerMockup.jpg",
            name: "Conference poster",
            to:"/conference",
        },
        {
            image: "/images/design/accountingWebMockup.png",
            name: "Accounting website",
            to:"/accounting",
        },
        {
            image: "/images/design/databaseMockup.png",
            name: "Database website",
            to:"/database",
        },
    ]


    return (
        <>
            <div className="max-w-1440px m-auto md:px-8 xl:px-12 xl:mb-6">
                <h1 className='h1 mb-4 p-6 md:p-0'>Design</h1>
                <div className="columns-1 md:columns-2 md:mb-4">                        
                    {
                        projects.map((project, index) => (
                            <>
                                <div key={index}>
                                    <div className="group relative cursor-pointer mb-4">
                                        <div className="w-full h-full">
                                            <Image
                                                className="object-contain !relative"
                                                src={project.image}
                                                alt="photo"
                                                fill
                                            />
                                        </div>
                                        <a href={project.to}>
                                            <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                                <p class="work text-white">{project.name}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
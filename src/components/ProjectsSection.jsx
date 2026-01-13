import { ExternalLink } from "lucide-react"

const projects = [
    {
        id:1,
        title:"InPERU Project",
        description: "A responsive corporate website developed with WordPress, HTML, Javascript, and CSS for inPERU, a Peruvian organization that promotes investment and financial markets internationally.",
        image:"/projects/project1.png",
        tags: ["WordPress", "HTML", "CSS", "JavaScript"],
        link:"https://inperu.pe/",
    },
    {
        id:2,
        title:"Luminexstore Project",
        description: "An e-commerce website built with HTML, CSS, Javascript, and WordPress featuring a clean catalog layout and product listings with categories like beauty, wellness, technology, and home items.",
        image:"/projects/project2.png",
        tags: ["WordPress", "HTML", "CSS", "JavaScript"],
        link:"https://luminexstore.com/",
    },
]

export const ProjectsSection = () => {
    return( 
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto px-4">
                This section showcases a selection of web and software projects that demonstrate my ability to design, develop, and deploy modern digital solutions. Each project reflects my experience working with different technologies, frameworks, and design approaches to build functional, user-friendly, and visually appealing applications.
            </p>
            <div className="container mx-auto max-w-5xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 sm:h-56 md:h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                                    {project.tags.map((tag, tagKey)=> (
                                        <span key={tagKey} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            {""}
                                            <ExternalLink size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { useState } from "react"
import { ExternalLink, X } from "lucide-react"

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
    {
        id:3,
        title:"PokeHub Project",
        description: "Pokehub is a frontend single-page application for exploring Pokémon data through PokeAPI, featuring a complete Pokédex experience with search and filtering, detailed Pokémon views, favorites persistence, side-by-side comparison, timed quiz modes, random team generation with type weakness analysis, and top rankings, built with React 18, TypeScript, Vite, React Router DOM, Axios, Tailwind CSS and the Vite React SWC plugin.",
        image:"/projects/project3.png",
        tags: ["React", "HTML", "CSS", "Tailwind CSS", "Vite", "TypeScript"],
        link:"https://poke-hub-flax.vercel.app/",
    },
    {
        id:4,
        title:"FreshMarket Project",
        description: "FreshMarket is a standalone Angular 21 single-page ecommerce application for buying fresh products, built with TypeScript, RxJS and Angular Router/HttpClient using a feature-based architecture (Core, Features, Shared), lazy-loaded routes, route guards, JWT authentication with automatic token/header injection, global HTTP error handling with session-expiration auto-logout, reactive state management through signals and observables, a backend-synced shopping cart and checkout flow, grouped order history management, user profile and shipping address editing, custom confirm dialog and toast notification infrastructure, legal/informational pages, and fallback UX strategies such as mock product data when product service connectivity fails.",
        image:"/projects/project4.png",
        tags: ["Angular", "TypeScript", "HTML", "CSS", "Vitest", "RxJS"],
        link:"https://freshmarket-frontend.vercel.app/",
    },
]

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null)

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
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
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
                                {project.description.length > 160 && (
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProject(project)}
                                        className="text-sm text-primary font-medium hover:underline mb-4"
                                    >
                                        Read more
                                    </button>
                                )}
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

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <button
                        type="button"
                        aria-label="Cerrar modal"
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setSelectedProject(null)}
                    />

                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-dialog-title"
                        className="relative z-10 w-full max-w-2xl rounded-xl border border-border bg-card p-5 sm:p-6 text-left shadow-xl"
                    >
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <h3 id="project-dialog-title" className="text-xl sm:text-2xl font-semibold">
                                {selectedProject.title}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Cerrar"
                                className="text-foreground/70 hover:text-primary transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <p className="text-muted-foreground leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
                            {selectedProject.description}
                        </p>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                className="px-4 py-2 rounded-md border border-border hover:bg-secondary transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

import { useState } from "react";
import { cn } from '@/lib/utils';

const skills = [
    //Frontend
    {name: "HTML/CSS", category: "frontend"},
    {name: "JavaScript", category: "frontend"},
    {name: "TypeScript", category: "frontend"},
    {name: "React", category: "frontend"},
    {name: "Angular", category: "frontend"},
    {name: "Tailwind CSS", category: "frontend"},
    {name: "Vue.js", category: "frontend"},
    {name: "Flutter", category: "frontend"},

    //Backend
    {name: "Node.js", category: "backend"},
    {name: "C#", category: "backend"},
    {name: "MongoDB", category: "backend"},
    {name: "MySQL", category: "backend"},
    {name: "Python", category: "backend"},

    //Tools
    {name: "Git", category: "tools"},
    {name: "Docker", category: "tools"},
    {name: "Figma", category: "tools"},
    {name: "Android Studio", category: "tools"},
    {name: "Visual Studio Code", category: "tools"},
    {name: "Postman", category: "tools"},
    {name: "Intellij IDE", category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills =  skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
        <section 
            id="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) =>(
                        <button 
                            key={key} 
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
import { href } from "react-router-dom";
import { cn } from "@/lib/utils";
import { use, useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navItems = [
    { name: 'Home', href: "#hero" },
    { name: 'About', href: "#about" },
    { name: 'Skills', href: "#skills" },
    { name: 'Projects', href: "#projects" },
    { name: 'Contact', href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setIsDarkMode(savedTheme === "dark");
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
        
    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300", 
            isScrolled ? "py-5 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center" 
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Diego Cabrera</span> {""}
                        Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} 
                            className="text-foreground hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <button 
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50 mr-12"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                <div className={
                    cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )
                }>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button 
                            onClick={toggleTheme}
                            className="flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors duration-300 mt-4"
                        >
                            {isDarkMode ? (
                                <><Sun className="h-6 w-6" /> Light Mode</>
                            ) : (
                                <><Moon className="h-6 w-6" /> Dark Mode</>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    );
}
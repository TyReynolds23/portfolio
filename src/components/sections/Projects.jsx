import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent text-center">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Star Wars Quote App</h3>
                            <p className="text-gray-400 mb-4">
                                Practice app made following a tutorial to learn CRUD operations using MongoDB
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Node.js', 'MongoDB', 'Express'].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-evenly items-center">
                                <a className="text-blue-400 hover:text-blue-300 transition-colors"> View Project →</a>
                                <a href="https://github.com/TyReynolds23/crud-app"><img src="/images/github-mark-white.png" alt="GitHub Logo" className="h-7 w-7"></img></a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">My Portfolio</h3>
                            <p className="text-gray-400 mb-4">
                                My portfolio website that you are on right now. Click the link to see the code.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['TailwindCSS', 'React'].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-evenly items-center">
                                <a href="ty-reynolds.com" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project →</a>
                                <a href="https://github.com/TyReynolds23/portfolio"><img src="/images/github-mark-white.png" alt="GitHub Logo" className="h-7 w-7"></img></a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Indian Harbor VFD Website</h3>
                            <p className="text-gray-400 mb-4">
                                Website for VFD I am on. Building for fun, also still a work in progress. Check back periodically to see it progressing.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Node.js', 'MongoDB', 'Express'].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-evenly items-center">
                                <a href="https://tyreynolds23.github.io/ihvfd-website/" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project →</a>
                                <a href="https://github.com/TyReynolds23/ihvfd-website"><img src="/images/github-mark-white.png" alt="GitHub Logo" className="h-7 w-7"></img></a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
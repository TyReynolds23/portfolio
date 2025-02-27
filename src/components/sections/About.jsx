import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
const frontendSkills = ["React","TailwindCSS","Bootstrap",];
const backendSkills = ["Node.js","MongoDB/Mongoose","Express",];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent text-center">About Me</h2>

                    <div className="rounded-xl p-8 my-5 border-white/10 border hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Where To Find Me</h3>
                        <div className="flex items-center justify-evenly">
                           <span className="bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-md hover:bg-blue-500/25 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"><a href="https://www.linkedin.com/in/ty-reynolds-8505b2218/">LinkedIn</a></span>
                           <span className="bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-md hover:bg-blue-500/25 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"><a href="https://github.com/TyReynolds23">GitHub</a></span>
                           <span className="bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-md hover:bg-blue-500/25 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"><a href="https://x.com/tyreynolds_dev">X</a></span>
                        </div>
                    </div>  

                    <div className="rounded-xl p-8 my-5 border-white/10 border hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Professional Background</h3>
                        <p classname="text-gray-300 mb-6">
                            I started my coding journey in the summer of 2024 when a coworker showed me 100Devs, an online bootcamp where I learned the basics of HTML, CSS, and JavaScript. From there I continued my education through online tutorials and then moved into a lot of trial and error making projects. Some of which should never see the light of day, but hey we all have to start somewhere. I do not ever want to stop learning and improving and adding to the stack of languages and skills at my disposal. From working with freelance clients to working on a team for a company, let me show you that I am the right guy for your next project.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Personal Background</h3>
                        <p classname="text-gray-300 mb-6">
                            When I'm not typing away working on projects or learning new frameworks and languages you can find me with my wife and kids in our small Texas town. We enjoy going to the park and riding bikes. You can also find me serving my community as a member of my local volunteer fire department.
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
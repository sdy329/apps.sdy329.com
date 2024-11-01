import Link from "next/link";

export default function ProjectCards() {
    const projects = [
        {
            "title": "SpoilerGuard",
            "description": "A cross-platform wiki application that allows users to browse articles of their favorite media without fear of spoilers.",
            "cover": "/covers/SpoilerGuard.png",
            "link": "/SpoilerGuard",
        },
        {
            "title": "Angular ToDo List",
            "description": "A simple to do list app built with Angular. The app was made to learn the basics of Angular.",
            "cover": "/covers/AngularToDoList.png",
            "link": "/Angular-To-Do-List",
        },
        {
            "title": "Cross Platform Calculator",
            "description": "A calculator app with many features and themes. The app was made as a part of a team using Dart and Flutter.",
            "cover": "/covers/CPCalculator.png",
            "link": "/Cross-Platform-Calculator",
        },
        {
            "title": "EcoTrack",
            "description": "EcoTrack is a web forum for discussing environmental issues and tracking progress on environmental initiatives.",
            "cover": "/covers/EcoTrack.png",
            "link": "/EcoTrack",
        }
    ];

    return (
        <div className="flex flex-wrap justify-center" >
            {projects.map((project) => (
                <div className="m-4" key={project.title}>
                    <Link href={project.link}>
                        <div className="z-10 w-full opacity-100 hover:opacity-85 transition-all motion-reduce:transition-none">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-700 min-h-60">
                                <img className="w-full" src={project.cover} alt="SpoilerGuard" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-slate-200">{project.title}</div>
                                    <p className="text-gray-400 text-base">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div >
    )
}
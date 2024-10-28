import Link from "next/link";

export default function ProjectCards() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="m-4">
                <Link href="/SpoilerGuard">
                    <div className="z-10 w-full bg-slate-900 opacity-100 hover:opacity-95 transition-all motion-reduce:transition-none">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-700 min-h-60">
                            <img className="w-full" src="/covers/SpoilerGuard.png" alt="SpoilerGuard" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-slate-200">SpoilerGuard</div>
                                <p className="text-gray-400 text-base">
                                    A cross-platform wiki application that allows users to browse articles of their favorite media without fear of spoilers.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="m-4">
                <Link href="/Angular-To-Do-List">
                    <div className="z-10 w-full bg-slate-900 opacity-100 hover:opacity-95 transition-all motion-reduce:transition-none">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-700 min-h-60">
                            <img className="w-full" src="/covers/AngularToDoList.png" alt="Angular To Do List" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-slate-200">Angular ToDo List</div>
                                <p className="text-gray-400 text-base">
                                    A simple to do list app built with Angular. The app was made to learn the basics of Angular.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="m-4">
                <Link href="/Cross-Platform-Calculator">
                    <div className="z-10 w-full bg-slate-900 opacity-100 hover:opacity-95 transition-all motion-reduce:transition-none">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-700 min-h-60">
                            <img className="w-full" src="/covers/temp.png" alt="Cross Platform Calculator" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-slate-200">Cross Platform Calculator</div>
                                <p className="text-gray-400 text-base">
                                    A calculator app with many features and themes. The app was made as a part of a team using Dart and Flutter.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="m-4">
                <Link href="/EcoTrack">
                    <div className="z-10 w-full bg-slate-900 opacity-100 hover:opacity-95 transition-all motion-reduce:transition-none">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-700 min-h-60">
                            <img className="w-full" src="/covers/EcoTrack.png" alt="Angular To Do List" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-slate-200">EcoTrack</div>
                                <p className="text-gray-400 text-base">
                                    EcoTrack is a web forum for discussing environmental issues and tracking progress on environmental initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
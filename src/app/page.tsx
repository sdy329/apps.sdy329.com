import HomeNavBar from "../components/HomeNavBar";
import ProjectCards from "../components/ProjectCards";

import '@/app/main.css';
import '@/app/personal.css';

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
      <div className="mx-auto min-h-screen font-sans">
        <HomeNavBar />
        <div className="flex flex-col items-center justify-center my-4">
          <h1 className="text-4xl text-slate-200 font-bold text-center">Welcome to my projects page</h1>
          <p className="text-lg text-center">Click any card to view the project or visit the GitHub Repository</p>
        </div>
        <ProjectCards />
      </div>
    </div>
  );
}

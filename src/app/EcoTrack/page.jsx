import ProjectNavBar from '../../components/ProjectNavBar';

import '@/app/main.css';
import '@/app/personal.css';

export default async function ResumePage() {

    return (
        <div className="bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
            <div className="mx-auto min-h-screen font-sans">
                <ProjectNavBar link="https://github.com/sdy329/ecotrack" />
                <div className="flex flex-col items-center justify-center my-4">
                    <h1 className="text-4xl text-slate-200 font-bold text-center">Working on deployment</h1>
                    <p className="text-lg text-center">Page may or may not load. Click the github icon to view the repository</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <iframe src="https://ecotrack.42web.io/index.php" className="w-full max-h-[90vh] h-[90vh]" />
                </div>
            </div>
        </div>
    );
}
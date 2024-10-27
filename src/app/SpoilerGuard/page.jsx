import ProjectNavBar from '../../components/ProjectNavBar';

import '@/app/main.css';
import '@/app/personal.css';

export default async function ResumePage() {

    return (
        <div className="bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
            <div className="mx-auto min-h-screen font-sans">
                <ProjectNavBar link="https://github.com/AndrewOneal/capstone" />
                <div className="flex flex-col items-center justify-center">
                    <iframe src="https://spoiler-guard-build.vercel.app" className="w-screen max-w-screen-sm max-h-[90vh] md:h-[90vh] h-[75vh]" />
                </div>
            </div>
        </div >
    );
}
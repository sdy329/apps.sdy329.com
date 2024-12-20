import ProjectNavBar from '../../components/ProjectNavBar';

import '@/app/main.css';
import '@/app/personal.css';

export default async function ResumePage() {

    return (
        <div className="bg-slate-900 text-slate-500 font-medium font-sans selection:text-sky-400">
            <div className="mx-auto min-h-screen font-sans">
                <ProjectNavBar link="https://github.com/sdy329/angular-todo-list" />
                <iframe src="https://angular-todo-list-psi.vercel.app" className="w-full max-h-[90vh] h-[90vh]" />
            </div>
        </div>
    );
}
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="App">
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                    </div>
                    <div className="lg:flex lg:space-x-12">
                        <Link to="/" className="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">About Me</Link>
                        <Link to="/skill" className="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Skill</Link>
                        <Link to="/project" className="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Project</Link>
                        <Link to="/work" className="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Work Experience</Link>
                        <Link to="/education" className="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Education</Link>
                    </div>
                    <div className="lg:flex lg:flex-1 lg:justify-end">
                    </div>
                </nav>
            </header>
        </div>
    );
}
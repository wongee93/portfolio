import { Link } from "react-router-dom";
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
    return (
        <div className="App">
            <header class="header">
                <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 nav-bar" aria-label="Global">
                    <div class="flex lg:flex-1">
                    </div>
                    <div class="lg:flex lg:space-x-12">
                        <Link to="/" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">About Me</Link>
                        <Link to="/skill" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Skill</Link>
                        <Link to="/project" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Project</Link>
                        <Link to="/work" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Work Experience</Link>
                        <Link to="/education" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Education</Link>
                    </div>
                    <div class="lg:flex lg:flex-1 lg:justify-end">
                    </div>
                </nav>
                <div className="alternative-element">
                    <nav>
                        <MobileNavbar />
                    </nav>
                </div>
            </header>
        </div>
    );
}
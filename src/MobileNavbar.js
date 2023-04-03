import { useState } from 'react';
import { Link } from "react-router-dom";

export default function MobileNavbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mobile-navbar">
            <div className="logo" onClick={toggleMenu}>☰</div>
            <div className='menu_list'>
                {isOpen && (
                    <ul>
                        <li><Link to="/" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">About Me</Link></li>
                        <li><Link to="/skill" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Skill</Link></li>
                        <li><Link to="/project" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Project</Link></li>
                        <li><Link to="/work" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Work Experience</Link></li>
                        <li><Link to="/education" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500">Education</Link></li>
                    </ul>
                )}
            </div>
        </div>
    )
}
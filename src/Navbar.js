import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="App">
            <header class="bg-white">

                <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div class="flex lg:flex-1">
                    </div>
                    <div class="hidden lg:flex lg:gap-x-12" >
                        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">About Me</Link>
                        <Link to="/skill" className="text-sm font-semibold leading-6 text-gray-900">Skill</Link>
                        <Link to="/project" className="text-sm font-semibold leading-6 text-gray-900">Project</Link>
                        <Link to="/work" className="text-sm font-semibold leading-6 text-gray-900">Work Experience</Link>
                        <Link to="/education" className="text-sm font-semibold leading-6 text-gray-900">Education</Link>
                    </div>
                    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    </div>
                </nav >

                {/* Mobile Ver */}
                <div class="lg:hidden" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 z-10"></div>
                    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div class="flex items-center justify-between">
                            <a href="#" class="-m-1.5 p-1.5">
                            </a>
                            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6 flow-root">
                            <div class="-my-6 divide-y divide-gray-500/10">
                                <div class="space-y-2 py-6">
                                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">About Me</Link>
                                    <Link to="/skill" className="text-sm font-semibold leading-6 text-gray-900">Skill</Link>
                                    <Link to="/project" className="text-sm font-semibold leading-6 text-gray-900">Project</Link>
                                    <Link to="/work" className="text-sm font-semibold leading-6 text-gray-900">Work Experience</Link>
                                    <Link to="/education" className="text-sm font-semibold leading-6 text-gray-900">Education</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header >
        </div >
    );
}
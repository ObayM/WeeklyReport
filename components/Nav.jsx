import React from "react";
import { Home } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-[#2d2d3f] p-3 shadow-md">
            <div className="container mx-auto">
                <ul className="flex items-center justify-between">
                    <li>
                        <Link href="/" className="group flex items-center space-x-2">
                            <div className="bg-[#434a78] p-2 rounded-lg transition-all duration-300 group-hover:bg-[#5a629a] group-hover:shadow-md">
                                <Home className="text-slate-300 transition-colors duration-300 group-hover:text-white" size={24} />
                            </div>
                            <span className="sr-only">Home</span>
                        </Link>
                    </li>
                    <li className="text-xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8f97c6] to-[#656dac]">
                            Weekly Report App
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
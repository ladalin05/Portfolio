import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-50 pt-12 pb-8 dark:text-gray-300 dark:bg-slate-950/95 border-t border-[#2a2a32]">
            <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-display font-bold text-lg">
                <Link to="/" className="group flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase italic">
                        Ladalin.Dev
                    </span>
                </Link>
            </div>
            <p className="text-smoke text-xs font-mono tracking-wide text-center">
                © {new Date().getFullYear()} Portfolio. Designed &amp; built with React + Tailwind CSS.
            </p>
            <div className="flex items-center gap-1 text-smoke text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
                <span>Available for work</span>
            </div>
            </div>
        </footer>
    )
}

export default Footer;
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
    { label: 'Schedule', href: '#schedule' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Resources', href: '#resources' },
]

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-4 sm:py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="flex items-center gap-2 group md:-ml-[150px] shrink-0">
                    {/* Dot grid icon */}
                    <Image src="/logo.svg" alt="Logo" width={170} height={170} className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px]" />
                </Link>

                {/* Nav links — hidden on mobile */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-sm text-muted hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3">
                    <Link
                        href="#register"
                        className="hidden sm:inline-flex items-center px-5 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                    >
                        Join free
                    </Link>
                    <Link
                        href="#register"
                        className="inline-flex items-center px-3 py-1.5 sm:px-5 sm:py-2 rounded-full bg-accent text-background text-xs sm:text-sm font-bold hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20"
                    >
                        Buy tickets
                    </Link>
                </div>
            </div>
        </nav>
    )
}

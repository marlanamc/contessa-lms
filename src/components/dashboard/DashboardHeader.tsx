import Link from "next/link";
import { BookOpenIcon, TrophyIcon } from "@/components/icons/Icons";
import UserProfileDropdown from "@/components/UserProfileDropdown";

interface DashboardHeaderProps {
    userName?: string;
}

export function DashboardHeader({ userName = "" }: DashboardHeaderProps) {
    return (
        <header className="sticky top-0 border-b z-50 bg-primary border-primary-dark/50 shadow-md transition-all">
            <div className="max-w-[1800px] mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex-1">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 group"
                        aria-label="Go to dashboard home"
                    >
                        <div className="w-8 h-8 rounded-lg bg-white/20 border border-white/40 flex items-center justify-center shadow-sm group-hover:bg-white/30 transition-colors">
                            <BookOpenIcon className="w-4 h-4 text-white" />
                        </div>
                        <p className="leading-tight">
                            <span className="font-handwritten text-lg sm:text-xl text-white">Contessa</span>
                            <span className="font-bold text-white/95 tracking-widest uppercase text-[10px] sm:text-xs block sm:inline sm:ml-2">
                                STAFF
                                <br className="sm:hidden" /> COMPANION
                            </span>
                        </p>
                    </Link>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up delay-100">
                    <Link
                        href="/dashboard/leaderboard"
                        className="hidden md:inline-flex shrink-0 items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary min-w-[132px] justify-center"
                    >
                        <TrophyIcon className="w-4 h-4" />
                        Leaderboard
                    </Link>
                    <UserProfileDropdown userName={userName} />
                </div>
            </div>
        </header>
    );
}

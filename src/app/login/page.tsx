import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-bg">
            <div className="w-full max-w-[400px] space-y-8">
                <header className="text-center space-y-1">
                    <h1 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-text">
                        Contessa Staff Companion
                    </h1>
                    <p className="text-sm text-secondary font-medium uppercase tracking-wider">
                        Knowledge Base
                    </p>
                </header>
                <div>
                    <h2 className="sr-only">Sign in</h2>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

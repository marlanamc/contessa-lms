"use client";

import { signIn, type SignInResponse } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { clearServiceWorkerCache } from "@/lib/clearCache";
import { Button } from "@/components/ui/Button";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const timeoutPromise: Promise<SignInResponse | undefined> = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Login timeout")), 10000)
            );

            const signInPromise = signIn("credentials", {
                username,
                password,
                redirect: false,
            });

            const result = await Promise.race([signInPromise, timeoutPromise]);

            if (result?.error) {
                console.error("[Login] Error:", result.error);
                setError("Invalid credentials. Please check your username and password.");
            } else if (result?.ok) {
                await clearServiceWorkerCache();
                router.push("/dashboard");
                router.refresh();
            } else {
                setError("Login failed. Please try again.");
            }
        } catch (err: unknown) {
            console.error("[Login] Exception:", err);
            if (err instanceof Error && err.message === "Login timeout") {
                setError("Login is taking too long. Please check your connection and try again.");
            } else {
                setError("An error occurred. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="bg-white border border-border shadow-sm rounded-xl p-6 space-y-5">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-text mb-1.5">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="w-full px-4 py-3 text-base text-text bg-white border border-border rounded-lg
                            placeholder:text-text-light
                            focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                            transition-[border-color,box-shadow] duration-150
                            aria-[invalid=true]:border-error aria-[invalid=true]:focus:ring-error/40"
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? "login-form-error" : undefined}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-text mb-1.5">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 text-base text-text bg-white border border-border rounded-lg
                            placeholder:text-text-light
                            focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                            transition-[border-color,box-shadow] duration-150
                            aria-[invalid=true]:border-error aria-[invalid=true]:focus:ring-error/40"
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? "login-form-error" : undefined}
                        required
                    />
                </div>
                {error && (
                    <div
                        id="login-form-error"
                        role="alert"
                        className="rounded-lg border border-error/30 bg-error/5 px-4 py-3"
                    >
                        <p className="text-sm font-medium text-error">{error}</p>
                    </div>
                )}
                <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={isLoading}
                    className="mt-2"
                >
                    {isLoading ? "Signing in…" : "Sign In"}
                </Button>
            </div>
        </form>
    );
}

"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ExternalLink } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
	const { data: session } = useSession();

	return (
		<div className="flex min-h-screen flex-col">
			<header className="container z-40">
				<div className="flex h-20 items-center justify-between py-6">
					<div className="flex">
						<Link href="/" className="font-semibold">
							Speedview Task
						</Link>
					</div>
					<nav className="flex space-x-4">
						<ThemeToggle />
						{session ? (
							<Button asChild>
								<Link href="/dashboard">Go to Dashboard</Link>
							</Button>
						) : (
							<Button asChild>
								<Link href="/sign-in">Sign in</Link>
							</Button>
						)}
					</nav>
				</div>
			</header>

			<main>
				<section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
					<div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center">
						<Link className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex space-x-2 items-center" target="_blank" href="https://github.com/kennyotesile/speedview-task">
							<span>View on GitHub</span>
							<ExternalLink size={16} strokeWidth={2.5} />
						</Link>
						<h1 className="font-bold text-3xl sm:text-5xl md:text-6xl text-center">An App Built using React-Based Next.js 14 App Router.</h1>
						<p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
							<span>An interview task built for&nbsp;</span>
							<Link href="https://memoirs.education" target="_blank" className="inline-flex items-center space-x-2 border-b-2">
								<span>Memoirs</span>
								<ExternalLink size={18} strokeWidth={2} />
							</Link>
							<span>&nbsp;by&nbsp;</span>
							<Link href="https://github.com/kennyotesile" target="_blank" className="inline-flex items-center space-x-2 border-b-2">
								<span>Kenny Otesile</span>
								<ExternalLink size={18} strokeWidth={2} />
							</Link>
						</p>
						{session ? (
							<Button asChild>
								<Link href="/sign-in">Go to Dashboard</Link>
							</Button>
						) : (
							<Button asChild>
								<Link href="/sign-in">Get Started</Link>
							</Button>
						)}
					</div>
				</section>

				<section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
					<div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
						<h2 className="font-semibold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
						<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">This project has features like Authentication, API Routes, etc.</p>
					</div>
					<div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
						<div className="relative overflow-hidden rounded-lg border bg-background p-2">
							<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
								<div className="space-y-2">
									<h3 className="font-semibold">Next.js 14</h3>
									<p className="text-sm text-muted-foreground">App Directory, Routing, Layouts, and API routes.</p>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-lg border bg-background p-2">
							<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
								<div className="space-y-2">
									<h3 className="font-semibold">React 18</h3>
									<p className="text-sm text-muted-foreground">Server and Client Components.</p>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-lg border bg-background p-2">
							<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
								<div className="space-y-2">
									<h3 className="font-semibold">Components</h3>
									<p className="text-sm text-muted-foreground">UI components built using Radix UI and styled with Tailwind CSS.</p>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-lg border bg-background p-2">
							<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
								<div className="space-y-2">
									<h3 className="font-semibold">Authentication</h3>
									<p className="text-sm text-muted-foreground">Authentication using NextAuth.js.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ExternalLink } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Protected from "@/components/protected";
import { useRouter } from "next/navigation";

export default function Home() {
	const { data: session } = useSession();
	const router = useRouter();

	return (
		<Protected>
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
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline" size="icon" className="border-none rounded-full">
										{session && <Image className="rounded-full" src={session?.user?.image} width={40} height={40} alt="Profile picture" />}
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem
										onClick={() => {
											signOut();
										}}
										className="cursor-pointer">
										Log out
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</nav>
					</div>
				</header>

				<main></main>
			</div>
		</Protected>
	);
}

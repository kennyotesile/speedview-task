"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			router.push("/dashboard");
		}
	}, [session, router]);

	return !session ? (
		<div className="flex min-h-screen flex-col">
			<main>
				<section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
					<div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center">
						<h2 className="font-semibold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Sign in</h2>
						<p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">Sign in to your dashboard using one of the providers below</p>
						<div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
							<Button
								className="space-x-2 justify-between"
								onClick={() => {
									signIn("google");
								}}>
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
									<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
									<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
									<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
									<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
									<path d="M1 1h22v22H1z" fill="none" />
								</svg>
								<span className="flex-1 items-center">Sign in with Google</span>
							</Button>
							<Button
								className="space-x-2 justify-between"
								onClick={() => {
									signIn("facebook");
								}}>
								<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" width="24" height="24" version="1.1" viewBox="0 0 14222 14222">
									<defs>
										<style type="text/css">{`.fil0 {fill:#1977F3;fillRule:nonzero;}.fil1 {fill:#FEFEFE;fillRule:nonzero;}`}</style>
									</defs>
									<g id="Layer_x0020_1">
										<metadata id="CorelCorpID_0Corel-Layer" />
										<path className="fil0" d="M14222 7111c0,-3927 -3184,-7111 -7111,-7111 -3927,0 -7111,3184 -7111,7111 0,3549 2600,6491 6000,7025l0 -4969 -1806 0 0 -2056 1806 0 0 -1567c0,-1782 1062,-2767 2686,-2767 778,0 1592,139 1592,139l0 1750 -897 0c-883,0 -1159,548 -1159,1111l0 1334 1972 0 -315 2056 -1657 0 0 4969c3400,-533 6000,-3475 6000,-7025z" />
										<path className="fil1" d="M9879 9167l315 -2056 -1972 0 0 -1334c0,-562 275,-1111 1159,-1111l897 0 0 -1750c0,0 -814,-139 -1592,-139 -1624,0 -2686,984 -2686,2767l0 1567 -1806 0 0 2056 1806 0 0 4969c362,57 733,86 1111,86 378,0 749,-30 1111,-86l0 -4969 1657 0z" />
									</g>
								</svg>

								<span className="flex-1 items-center">Sign in with Facebook</span>
							</Button>
							<Button
								className="space-x-2 justify-between"
								onClick={() => {
									signIn("github");
								}}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
										transform="scale(64)"
										fill="#1B1F23"
									/>
								</svg>
								<span className="flex-1 items-center">Sign in with GitHub</span>
							</Button>
						</div>
						<Link href="/" className="text-muted-foreground">
							Go back to homepage
						</Link>
					</div>
				</section>
			</main>
		</div>
	) : null;
}

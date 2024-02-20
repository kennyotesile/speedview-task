"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Protected from "@/components/protected";
import { Card } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function Home() {
	const { data: session } = useSession();

	const contactFormSchema = z.object({
		firstName: z.string().min(1, {
			message: "Please enter your first name",
		}),
		lastName: z.string().min(1, {
			message: "Please enter your last name",
		}),
		emailAddress: z
			.string()
			.email({
				message: "Please enter a valid email address",
			})
			.min(4, {
				message: "Please enter a valid email address",
			}),
		phoneNumber: z.coerce.string().min(11, {
			message: "Please enter your phone number",
		}),
		address: z.string().min(1, {
			message: "Please enter your address",
		}),
		check: z.boolean({
			required_error: "You must agree to our privacy policy",
		}),
	});

	const contactForm = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			emailAddress: "",
			phoneNumber: "",
			address: "",
		},
	});

	const submitContactForm = (values: z.infer<typeof contactFormSchema>) => {
		return;
	};

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

				<main className="container py-6 space-y-8">
					<div className="flex flex-col space-y-2">
						<h1 className="font-semibold text-3xl md:text-4xl">Dashboard</h1>
						<p className="text-lg text-muted-foreground">Manage your dashboard</p>
					</div>
					<Card className="p-6 space-y-8">
						<h2 className="font-semibold text-2xl">Add Personal Information</h2>
						<Form {...contactForm}>
							<form onSubmit={contactForm.handleSubmit(submitContactForm)} className="flex-1 flex flex-col gap-5">
								<div className="flex flex-col lg:flex-row gap-6">
									<FormField
										control={contactForm.control}
										name="firstName"
										render={({ field }) => (
											<FormItem className="flex-1 flex flex-col items-start">
												<FormLabel className="text-xs font-medium text-muted-foreground">First name</FormLabel>
												<FormControl>
													<Input placeholder="First name" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={contactForm.control}
										name="lastName"
										render={({ field }) => (
											<FormItem className="flex-1 flex flex-col items-start">
												<FormLabel className="text-xs font-medium text-muted-foreground">Last name</FormLabel>
												<FormControl>
													<Input placeholder="Last name" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<FormField
									control={contactForm.control}
									name="emailAddress"
									render={({ field }) => (
										<FormItem className="flex flex-col items-start">
											<FormLabel className="text-xs font-medium text-muted-foreground">Email address</FormLabel>
											<FormControl>
												<Input placeholder="you@yourcompany.com" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={contactForm.control}
									name="phoneNumber"
									render={({ field }) => (
										<FormItem className="flex flex-col items-start">
											<FormLabel className="text-xs font-medium text-muted-foreground">Phone number</FormLabel>
											<FormControl>
												<Input placeholder="+234 803 123-4567" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={contactForm.control}
									name="address"
									render={({ field }) => (
										<FormItem className="flex flex-col items-start">
											<FormLabel className="text-xs font-medium text-muted-foreground">Address</FormLabel>
											<FormControl>
												<Textarea {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type="submit">Sunmit</Button>
							</form>
						</Form>
					</Card>
				</main>
			</div>
		</Protected>
	);
}

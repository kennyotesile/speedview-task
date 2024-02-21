//@ts-nocheck
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
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const personalInfoFormSchema = z.object({
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
});

export default function Home() {
	const { data: session } = useSession();
	const [personalInfo, setPersonalInfo] = useState(null);
	const [submittingPersonalInfo, setSubmittingPersonalInfo] = useState(false);
	const [gettingPersonalInfo, setGettingPersonalInfo] = useState(false);

	const personalInfoForm = useForm<z.infer<typeof personalInfoFormSchema>>({
		resolver: zodResolver(personalInfoFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			emailAddress: "",
			phoneNumber: "",
			address: "",
		},
	});

	const submitPersonalInfo = async (values: z.infer<typeof personalInfoFormSchema>) => {
		setSubmittingPersonalInfo(true);
		console.log("Submitting personal info...");

		const response = await fetch("/api/user", {
			method: "POST",
			body: JSON.stringify({
				email: session?.user?.email,
				firstName: personalInfoForm.getValues().firstName,
				lastName: personalInfoForm.getValues().lastName,
				phone: personalInfoForm.getValues().phoneNumber,
				address: personalInfoForm.getValues().address,
			}),
		});

		if (response.ok) {
			alert("Personal information submitted successfully!");

			personalInfoForm.reset();

			const data = await response.json();
			console.log(data);
		} else {
			alert("Unknown error occured.");

			setSubmittingPersonalInfo(false);
			console.error("Failed to submit personal info");

			return;
		}

		setSubmittingPersonalInfo(false);
		console.log("Submitted personal info");

		getPersonalInfo();
	};

	const getPersonalInfo = async () => {
		setGettingPersonalInfo(true);
		console.log("Retrieving personal info...");

		const response = await fetch(`/api/user?email=${session?.user?.email}`);

		if (response.ok) {
			const data = await response.json();
			setPersonalInfo(data);
			console.log(data);
		} else {
			setGettingPersonalInfo(false);
			console.error("Failed to retrieve personal info");

			return;
		}

		setGettingPersonalInfo(false);
		console.log("Retrieved personal info");
	};

	useEffect(() => {
		if (session) {
			getPersonalInfo();
		}
	}, [session]);

	const { register, watch } = useForm();

	const email = watch("emailAddress");

	useEffect(() => {
		register("emailAddress");

		if (session?.user?.email) {
			personalInfoForm.setValue("emailAddress", session?.user?.email);
		}
	}, [personalInfoForm, session]);

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
					<div className="flex flex-col space-y-2">
						<p className="text-lg text-muted-foreground">Email address: {gettingPersonalInfo ? "Loading..." : session?.user?.email}</p>
						<p className="text-lg text-muted-foreground">First name: {gettingPersonalInfo ? "Loading..." : personalInfo ? personalInfo.firstName : "-"}</p>
						<p className="text-lg text-muted-foreground">Last name: {gettingPersonalInfo ? "Loading..." : personalInfo ? personalInfo.lastName : "-"}</p>
						<p className="text-lg text-muted-foreground">Phone number: {gettingPersonalInfo ? "Loading..." : personalInfo ? personalInfo.phone : "-"}</p>
						<p className="text-lg text-muted-foreground">Address: {gettingPersonalInfo ? "Loading..." : personalInfo ? personalInfo.address : "-"}</p>
					</div>
					<Card className="p-6 space-y-8">
						<h2 className="font-semibold text-2xl">Edit Personal Information</h2>
						<Form {...personalInfoForm}>
							<form onSubmit={personalInfoForm.handleSubmit(submitPersonalInfo)} className="flex-1 flex flex-col gap-5">
								<div className="flex flex-col lg:flex-row gap-6">
									<FormField
										control={personalInfoForm.control}
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
										control={personalInfoForm.control}
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
									control={personalInfoForm.control}
									name="emailAddress"
									render={({ field }) => (
										<FormItem className="flex flex-col items-start">
											<FormLabel className="text-xs font-medium text-muted-foreground">Email address</FormLabel>
											<FormControl>
												<Input placeholder={session?.user?.email ? session?.user?.email : "you@example.com"} {...field} disabled />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={personalInfoForm.control}
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
									control={personalInfoForm.control}
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
								<Button type="submit" disabled={submittingPersonalInfo} className="space-x-2">
									{submittingPersonalInfo && <Loader2 size={16} className="animate animate-spin" />}
									<span>Submit</span>
								</Button>
							</form>
						</Form>
					</Card>
				</main>
			</div>
		</Protected>
	);
}

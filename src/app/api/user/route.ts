import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const email = url.searchParams.get("email");

	if (!email) {
		return new NextResponse(JSON.stringify({ error: "Missing email parameter" }), {
			status: 400,
		});
	}

	const result = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	return new NextResponse(JSON.stringify(result));
}

export async function POST(request: NextRequest) {
	const { email, firstName, lastName, phone, address } = await request.json();

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		const newUser = await prisma.user.create({ data: { email, firstName, lastName, phone, address } });

		return new NextResponse(JSON.stringify(newUser));
	} else {
		const updatedUser = await prisma.user.update({
			where: {
				email,
			},
			data: {
				firstName,
				lastName,
				phone,
				address,
			},
		});

		return new NextResponse(JSON.stringify(updatedUser));
	}
}

export async function DELETE(request: NextRequest) {
	const url = new URL(request.url);
	const email = url.searchParams.get("email") as string;

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		return new NextResponse(JSON.stringify({ error: "User information not found" }), {
			status: 404,
		});
	} else {
		await prisma.user.delete({
			where: {
				email,
			},
		});

		return new NextResponse(JSON.stringify({ message: "User information deleted successfully" }));
	}
}

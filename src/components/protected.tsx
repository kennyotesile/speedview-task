import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Protected({ children }: { children: React.ReactNode }) {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (!session && typeof session !== "undefined") {
			router.push("/sign-in");
		}
	}, [session, router]);

	return <>{children}</>;
}

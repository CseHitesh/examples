import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-scree items-center">
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
      <Link href="/sign-in">
        <Button>sign-in</Button>
      </Link>
      landing page(Unprotected)
    </main>
  );
}

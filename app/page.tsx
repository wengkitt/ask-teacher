"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  if (!session) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-semibold tracking-tight">Ask Teacher</h1>
        <p className="text-lg text-muted-foreground">
          You are not signed in.
        </p>
        <div className="flex gap-4">
          <a href="/signup">
            <Button>Sign up</Button>
          </a>
          <a href="/login">
            <Button variant="outline">Sign in</Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-semibold tracking-tight">Ask Teacher</h1>
      <p className="text-lg text-muted-foreground">
        Welcome, {session.user.name}!
      </p>
      <Button onClick={handleSignOut} variant="outline">
        Sign out
      </Button>
    </div>
  );
}

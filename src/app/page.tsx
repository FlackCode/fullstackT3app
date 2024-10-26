"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
 const {data: sessionData} = useSession()

  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {sessionData && <span>Logged in as {sessionData.user?.email}</span>}
              </p>
              <Link
                href={sessionData ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {sessionData ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
        </div>
      </main>
  );
}

"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import Todos from "~/component/Todos";

export default function Home() {
 const {data: sessionData} = useSession()

  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          {sessionData && (
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
                <h3 className="text-xl font-bold">Todos</h3>
                <Todos />
              </div>
            </div>
          )}
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

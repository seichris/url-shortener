import { db } from '@/lib/db'
import { shortUrls, users } from '@/lib/db/schema'
import { Anchor, User } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 60

export default async function Page() {
  const getUsers = await db.select().from(users)
  const getShortUrls = await db.select().from(shortUrls)

  return (
    <main className="flex flex-col items-center p-5">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          
          <h1 className="font-heading text-3xl sm:text-5xl">
            An open source URL shortener.
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center space-y-1 rounded-md border-2 border-violet-400 bg-violet-100 px-8 py-6">
              <User className="h-8 w-8 text-violet-600" />
              <p className="text-xs">Users</p>
              <p>{getUsers?.length}</p>
            </div>

            <div className="flex flex-col items-center space-y-1 rounded-md border-2 border-indigo-400 bg-indigo-100 px-8 py-6">
              <Anchor className="h-8 w-8 text-indigo-600" />
              <p className="text-xs">Short Links</p>
              <p>{getShortUrls?.length}</p>
            </div>
          </div>
          <div className="mt-4 space-x-4">
            <Link
              href="/access"
              className="rounded-md bg-slate-900 px-8 py-2.5 text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

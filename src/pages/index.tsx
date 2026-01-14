
import { Inter } from 'next/font/google'
import Link from "next/link"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Tailwind is working</h1>
      <p className="mt-4 text-gray-600">Next.js 13 + TS + Tailwind v3</p>

      <Link href="/login">
        <button type="button" className="rounded-lg bg-blue-500 p-3 m-5">go to login</button>
      </Link>

    </main>
      
  );
}
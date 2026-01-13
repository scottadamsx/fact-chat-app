import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Tailwind is working</h1>
      <p className="mt-4 text-gray-600">Next.js 13 + TS + Tailwind v3</p>
    </main>
  );
}
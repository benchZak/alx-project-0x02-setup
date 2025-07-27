// pages/index.tsx
import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ALX Next.js Project</title>
        <meta name="description" content="Next.js project with TypeScript and Tailwind CSS" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome to ALX Next.js Project!
        </h1>
        <p className="text-lg text-center text-gray-700">
          This project is set up with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </div>
  )
}

// pages/about.tsx
import Head from 'next/head'
import Header from '../components/layout/Header'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About | ALX Next.js Project</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          About Page
        </h1>
        <p className="text-lg text-center text-gray-700">
          This is a Next.js project created for learning purposes.
        </p>
      </main>
    </div>
  )
}

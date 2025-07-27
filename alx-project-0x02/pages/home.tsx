// pages/home.tsx
import Head from 'next/head'
import Header from '../components/layout/Header'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home | ALX Next.js Project</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Home Page
        </h1>
        <p className="text-lg text-center text-gray-700">
          Welcome to the home page of our Next.js project.
        </p>
      </main>
    </div>
  )
}

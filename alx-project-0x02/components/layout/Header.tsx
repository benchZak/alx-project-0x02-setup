// components/layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            ALX Project
          </Link>
          <div className="flex space-x-6">
            <Link 
              href="/home" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/posts" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Posts
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

// components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Pixelate Solutions LLC. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:text-gray-500">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-500">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

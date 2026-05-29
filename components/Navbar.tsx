"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50  backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        

        <Link href="/">
          <h1 className="text-2xl font-bold tracking-wide">
            Almora Tourism
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/places"
            className="transition hover:text-blue-600"
          >
            Places
          </Link>

          <Link
            href="/blogs"
            className="transition hover:text-blue-600"
          >
            Blogs
          </Link>

          <Link
            href="/cafes"
            className="transition hover:text-blue-600"
          >
            Cafes
          </Link>

          <Link
            href="/temples"
            className="transition hover:text-blue-600"
          >
            Temples
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t  md:hidden">
          <div className="flex flex-col gap-5 px-6 py-6 text-lg">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/places"
              onClick={() => setIsOpen(false)}
            >
              Places
            </Link>

            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>

            <Link
              href="/cafes"
              onClick={() => setIsOpen(false)}
            >
              Cafes
            </Link>

            <Link
              href="/temples"
              onClick={() => setIsOpen(false)}
            >
              Temples
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
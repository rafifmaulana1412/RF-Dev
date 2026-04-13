"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="rf dev"
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          <span className="text-cream/40 text-sm font-body">
            RF <span className="text-gold">dev</span> Web Development Studio
          </span>
        </div>
        <p className="text-cream/20 text-xs font-mono">
          © {new Date().getFullYear()} RF dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-300 to-gray-100 text-sm">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* 🔥 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* COLUMN 1 */}
          <div>
            <h4 className="font-semibold mb-4">Product Support</h4>
            <ul className="space-y-2 text-[#6e6e73]">
              <li><Link href="#">Web Apps</Link></li>
              <li><Link href="#">Mobile Apps</Link></li>
              <li><Link href="#">E-commerce</Link></li>
              <li><Link href="#">CRM Systems</Link></li>
              <li><Link href="#">Custom Software</Link></li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-[#6e6e73]">
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">UI/UX Design</Link></li>
              <li><Link href="#">SEO Optimization</Link></li>
              <li><Link href="#">Maintenance</Link></li>
              <li><Link href="#">Consulting</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-[#6e6e73]">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Support</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-[#6e6e73]">
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Email</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>

        </div>

        {/* 🔥 DIVIDER */}
        <div className="border-t border-[#d2d2d7] mt-12 pt-6">

          {/* LEGAL */}
          <div className="flex flex-col md:flex-row justify-between gap-4 text-[#6e6e73]">

            <p>Copyright © 2026 ITPL</p>

            <div className="flex gap-5 flex-wrap">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Use</Link>
              <Link href="#">Legal</Link>
              <Link href="#">Site Map</Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}
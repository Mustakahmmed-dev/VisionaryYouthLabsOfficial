"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({ href, exact = false, className = "", activeClass = "text-[#5ce1e6]", children }) {
  const pathname = usePathname()

  const normalize = (url) => url.replace(/\/+$/, '') || '/'
  const isActive = exact
    ? normalize(pathname) === normalize(href)
    : normalize(pathname).startsWith(normalize(href))

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClass : ""}`}
    >
      {children}
    </Link>
  )
}

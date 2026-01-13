"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Home,
  Info,
  Briefcase,
  Users,
  MessageCircle,
  Image as ImageIcon,
} from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "About", path: "/about", icon: Info },
    { label: "Services", path: "/services", icon: Briefcase },
    { label: "Guards", path: "/guards", icon: Users },
    { label: "Contact", path: "/contact", icon: MessageCircle },
    { label: "Gallery", path: "/gallery", icon: ImageIcon },
  ];

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="bg-[rgb(28,28,28)] text-white sticky top-0 z-50">

      {/* ===== TOP YELLOW BAR (POLISHED) ===== */}
      <div className="hidden sm:block bg-yellow-400 py-2">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-black font-medium text-sm">

            {/* LOCATION */}
            <a
              href="https://maps.app.goo.gl/gBeHbh42iuJtgXMy5"
              target="_blank"
              className="flex items-center gap-2 cursor-pointer no-underline
                         transition-transform duration-300 hover:scale-110 hover:opacity-90"
            >
              <MapPin className="w-4 h-4" />
              Jaipur
            </a>

            {/* PHONE */}
            <a
              href="tel:+918003001702"
              className="flex items-center gap-2 cursor-pointer no-underline
                         transition-transform duration-300 hover:scale-110 hover:opacity-90"
            >
              <Phone className="w-4 h-4" />
              +91 8003001702
            </a>

            {/* EMAIL */}
            <a
              href="mailto:rakshakcommand@gmail.com"
              className="flex items-center gap-2 cursor-pointer no-underline
                         transition-transform duration-300 hover:scale-110 hover:opacity-90"
            >
              <Mail className="w-4 h-4" />
              rakshakcommand@gmail.com
            </a>

          </div>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="shadow-md">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-2 relative z-[60] cursor-pointer"
            >
              <Image
                src="/images/logo.png"
                alt="Rakshak Command Security Services"
                width={60}
                height={60}
                priority
              />
              <span className="font-bold text-lg md:text-xl">
                RAKSHAK COMMAND
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`font-medium transition
                        ${
                          isActive(item.path)
                            ? "text-yellow-400 font-semibold"
                            : "text-gray-300 hover:text-yellow-400"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-yellow-400 relative z-[40]"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE SIDEBAR ===== */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-64 bg-[rgb(28,28,28)] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-yellow-400 mb-6"
            >
              <X />
            </button>

            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition
                      ${
                        isActive(item.path)
                          ? "bg-yellow-400 text-black font-semibold"
                          : "text-white hover:bg-slate-800"
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

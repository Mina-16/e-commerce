"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { CartContext } from "../_context/CartContext";

function Header() {
  const pathname = usePathname();
  const {cart, setCart} = useContext(CartContext)
  // اخفاء الهيدر في صفحات تسجيل الدخول فقط
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Image src="/logo.svg" alt="logo" width={35} height={35} />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {[
                "About",
                "Careers",
                "History",
                "Services",
                "Projects",
                "Blog",
              ].map((item) => (
                <li key={item}>
                  <a className="text-gray-500 hover:text-gray-700" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center gap-2">
              <FiShoppingCart />
              <h2>({cart?.length})</h2>
            </div>
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full px-4 py-2">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

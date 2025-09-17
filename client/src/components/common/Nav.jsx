import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react"; // hamburger icon

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userInfo);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "#" },
    { label: "Success story", href: "/success-story" },
    { label: "Contact", href: "#Contact" },
    {
      label: userData ? "Account" : "Login",
      href: userData ? "/account" : "/login",
    },
  ];

  const handleScroll = (href) => {
    const id = href.replace("#", "");
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // menu বন্ধ
  };

  return (
    <nav className="w-full absolute top-[42px] left-0 z-10">
      <div className="flex max-w-[1400px] items-center justify-between px-3 py-4 mx-auto">
        {/* Logo */}
        <img
          src="https://c.animaapp.com/mflxuw34KVFwR9/img/logo-1.png"
          alt="Logo"
          className="h-10 w-[100px] md:w-[150px] lg:w-[200px] xl:w-[250px]   object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link
                    to={item.href}
                    onClick={() => handleScroll(item.href)}
                    className="hover:text-[#ff1e1e] transition-colors"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="relative w-[200px] h-[50px] rounded-[10px] bg-gradient-to-b from-[#ff8079] to-[#ff1e1e] hover:opacity-90 transition-opacity border-0">
            <div className="absolute left-5 w-[20px] h-[20px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/icon-5.png)] bg-cover bg-center" />
            <span className="ml-10 text-white text-lg">Browse Course</span>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-[70px] left-0 w-full z-20">
          <ul className="flex flex-col items-start gap-4 p-5">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  onClick={() => handleScroll(item.href)}
                  className="block text-lg text-gray-800 hover:text-[#ff1e1e] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button className="w-full mt-2 h-[45px] rounded-[10px] bg-gradient-to-b from-[#ff8079] to-[#ff1e1e] hover:opacity-90 transition-opacity">
                Browse Course
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

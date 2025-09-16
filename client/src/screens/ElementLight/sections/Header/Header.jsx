import React from 'react'

import {
  NavigationMenu,
  NavigationMenuItem, 
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Button } from '../../../../components/ui/button';
import { Link, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


export default function Header() {


const navigate = useNavigate();
const userData = useSelector((state) => state.user.userInfo);

 



const handleScroll = (href) => {
    const id = href.replace("#", ""); // #Contact → Contact
    if (window.location.pathname !== "/") {
      // Home page এ না থাকলে navigate
      navigate("/"); 
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // navigation হওয়ার পরে scroll
    } else {
      // Home page এ থাকলে সরাসরি scroll
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "#" },
    { label: "Success story", href: "#successStories" },
    { label: "Contact", href: "#Contact" },
    { label: userData ? "Account" : "Login", href: userData ? "/account" : "/login" },
  ];

const contactInfo = [
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/icon.png",
      text: "01777308777",
      width: "w-[135.5px]",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/icon-1.png",
      text: "info@creativeitinstitute.com",
      width: "w-[249.42px]",
    },
  ];
  return (
    <div>
              {/* Header Section */}
      <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex flex-col items-start pt-[7px] pb-0.5 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(181deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)]">
        <div className="flex flex-wrap items-center justify-center gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex max-w-[1400px] px-3 items-start justify-between   py-0 relative flex-1 grow">
            <div className="inline-flex h-7 items-start gap-[59.45px] pl-0 pr-[83.01px] py-0 relative flex-[0_0_auto]">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`relative ${contact.width} h-[27px] flex items-center gap-2 `}
                >
                  <div
                    className="  w-[18px] h-[18px]  bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${contact.icon})` }}
                  />
                  <div className=" h-[27px] [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[27px] whitespace-nowrap">
                    {contact.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex flex-col items-start justify-center relative self-stretch flex-[0_0_auto]">
              <div className="inline-flex flex-col h-[33px] items-start relative">
                <div className="inline-flex items-start pt-0 pb-1.5 px-0 relative flex-[0_0_auto]">
                  <div className=" cursor-pointer relative w-[60px] h-[25px]">
                    <div className="flex w-[60px] h-[25px] items-center justify-between pr-[2.84e-14px] pl-0 py-0 relative bg-white rounded-[10px]">
                      <div className=" inline-flex flex-col items-start pl-1.5 pr-0 py-0 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#ff1e1e] text-xs tracking-[0] leading-[26px] whitespace-nowrap">
                          BN
                        </div>
                      </div>
                      <div className="absolute w-5 h-5 top-[3px] left-9 bg-[#d63030] rounded-md" />
                      <div className="inline-flex flex-col items-start pl-0 pr-1.5 py-0 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[8px] tracking-[1.00px] leading-[26px] whitespace-nowrap">
                          EN
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex flex-col w-full items-center  py-[25px] absolute top-[42px] left-0 z-10">
        <div className="flex max-w-[1400px] items-center justify-between px-3 py-0 relative w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start pl-0 pr-4 py-0 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start px-0 py-[5px] relative flex-[0_0_auto]">
              <div className="relative w-[318px] max-h-[52px] h-[52px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/logo-1.png)] bg-cover bg-[50%_50%]" />
            </div>
          </div>

          <div className="flex items-center justify-end relative flex-1 grow">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-0">
                  {navigationItems.map((item, index) => (
                    <NavigationMenuItem
                      key={index}
                      className="inline-flex flex-col items-start pl-0 pr-10 py-0 relative flex-[0_0_auto]"
                    >
                      <Link
                        to={item.href}
                        onClick={() => handleScroll(item.href)}
                        className="inline-flex flex-col items-center relative flex-[0_0_auto] hover:text-[#ff1e1e] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                <Button className="h-auto relative w-[209.41px] h-[53px] rounded-[10px] bg-[linear-gradient(190deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] hover:opacity-90 transition-opacity border-0 p-0">
                  <div className="absolute w-[31px] h-[18px] top-[19px] left-[19px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/icon-5.png)] bg-cover bg-[50%_50%]" />
                  <div className="inline-flex items-start justify-center absolute top-[13px] left-[50px]">
                    <div className="text-lg leading-[27px] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-center tracking-[0] whitespace-nowrap">
                      Browse Course
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

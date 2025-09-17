import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const Footer = () => {
  const contactInfo = [
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/background-2.svg",
      title: "Head Office:",
      content: [
        "Momtaz Plaza (4th Floor)",
        "House # 07 , Road # 04",
        "Dhanmondi, Dhaka- 1205",
      ],
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/background.svg",
      title: "",
      content: [
        "+880 1777308777",
        "+880 1624666000",
        "+880 1624888444",
        "+880 1966177177",
        "+880 1625555444",
        "+880 1990779900",
      ],
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/background-1.svg",
      title: "",
      content: ["info@creativeitinstitute.com"],
    },
  ];

  const quickLinks = [
    "Free Seminar Schedule",
    "Mentors",
    "Success Story",
    "Our Gallery",
    "FAQ",
    "Blog",
    "Privacy Policy",
  ];

  const popularCourses = [
    "Web Development",
    "Professional Graphic Design",
    "Digital Marketing",
    "Mern Stack Development",
    "Motion Graphics",
    "Professional 3D Animation",
    "Content Writing",
  ];

  const otherLinks = [
    "About Us",
    "Our Facility",
    "Our Achievement",
    "Career Placement",
    "Freelancing",
    "Students Feedback",
    "Contact",
  ];

  const paymentMerchants = [
    { logo: "https://c.animaapp.com/mflxuw34KVFwR9/img/bkash.png", numbers: ["01990779766", "01309014614"] },
    { logo: "https://c.animaapp.com/mflxuw34KVFwR9/img/nagad.png", numbers: ["01309014614"] },
    { logo: "https://c.animaapp.com/mflxuw34KVFwR9/img/rocket.png", numbers: ["013090146143"] },
    { logo: "https://c.animaapp.com/mflxuw34KVFwR9/img/sslcommerz.png", numbers: ["SSLCOMMERZ"], isSSL: true },
  ];

  const renderLinks = (title, links) => (
    <div className="flex flex-col gap-4">
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <nav className="flex flex-col gap-2">
        {links.map((link, i) => (
          <span key={i} className="text-white/70 hover:text-white cursor-pointer text-sm">
            {link}
          </span>
        ))}
      </nav>
    </div>
  );

  return (
    <footer className="bg-[#403532] text-white pt-20 relative">
      {/* Admission Section */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Admission Is Going on</h1>
        <p className="text-[#bab5ad] text-base sm:text-lg mb-6">
          Enroll to any online or offline course now, take one step ahead towards a competent career
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-[#403532] transition-colors">
            Join Free Seminar
          </Button>
          <Button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-[#403532] transition-colors">
            Browse Course
          </Button>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-lg">Contact</h3>
          {contactInfo.map((info, idx) => (
            <div key={idx} className="flex gap-3">
              <img src={info.icon} alt="icon" className="w-8 h-8 flex-shrink-0" />
              <div className="text-sm text-white/70">
                {info.title && <>{info.title}<br /></>}
                {info.content.map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
              </div>
            </div>
          ))}
        </div>

        {renderLinks("Quick Links", quickLinks)}
        {renderLinks("Popular Courses", popularCourses)}
        {renderLinks("Others", otherLinks)}
      </div>

      {/* Payment Merchants */}
      <div className="bg-[#fffdfd] py-16">
        <h2 className="text-center text-2xl font-bold mb-8 text-[#2d2d2d]">Our Payment Merchant</h2>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6">
          {paymentMerchants.map((merchant, i) => (
            <Card key={i} className="flex flex-col items-center p-4 w-40 bg-transparent shadow-none border border-gray-200">
              <div className={`w-32 ${merchant.isSSL ? "h-6 py-2" : "h-16"} bg-cover bg-center`} style={{ backgroundImage: `url(${merchant.logo})` }} />
              <div className="text-center text-sm mt-2">
                {merchant.numbers.map((num, idx) => <div key={idx}>{num}</div>)}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="w-40 h-12 bg-[url('https://c.animaapp.com/mflxuw34KVFwR9/img/creative-it-institute-1.png')] bg-cover bg-center" />
        <p className="text-sm">&copy; 2025 Creative IT Institute. All right reserved | <span className="text-[#ff1e1e] cursor-pointer hover:underline">Sitemap</span></p>
        <p className="text-sm">e-TIN: 570007703094, TL: TRAD/DSCC/228155/2019</p>
      </div>
    </footer>
  )
}

import React from 'react'

export default function Header() {
  const contactInfo = [
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/icon.png",
      text: "01777308777",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/icon-1.png",
      text: "info@creativeitinstitute.com",
    },
  ];

  return (
      <header className="flex flex-col items-start pt-2 pb-1 w-full bg-gradient-to-b from-[#ff8079] to-[#ff1e1e]">
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="flex flex-wrap w-full max-w-[1400px] px-3 items-center justify-between">
            
            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${contact.icon})` }}
                  />
                  <div className="text-white text-sm md:text-base font-medium">
                    {contact.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Language Switch */}
            <div className="mt-2 md:mt-0">
              <div className="flex items-center w-[60px] h-[25px] bg-white rounded-lg cursor-pointer">
                <div className="flex-1 text-xs md:text-sm font-bold text-[#ff1e1e] text-center">BN</div>
                <div className="bg-[#d63030] text-white text-[10px] rounded-md px-1 py-0.5">EN</div>
              </div>
            </div>

          </div>
        </div>
      </header> 
  );
}

import React, { useEffect, useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { BiHome } from "react-icons/bi";

export const DropDown = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileTab, setExpandedMobileTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 p-4 flex justify-between items-center transition-all duration-300 
      ${isScrolled ? "bg-teal-500 shadow-lg" : "bg-[#00000000]"} px-6 md:pr-28 pl-10`}
    >
      {/* Logo */}
      <span className="text-white text-xl font-bold cursor-pointer">
        Photography
      </span>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-12 text-white">
        <div className="relative flex gap-8 text-white" onMouseLeave={() => setSelectedTab(null)}>
          <span className="cursor-pointer hover:text-gray-900 transition">About</span>
          <span className="cursor-pointer hover:text-gray-900 transition">Nippon Paints</span>
          <span className="cursor-pointer hover:text-gray-900 transition">Woods</span>
          <span className="cursor-pointer hover:text-gray-900 transition">Send Inquiry</span>

          {/* Others Dropdown */}
          <div className="relative" onMouseEnter={() => setSelectedTab("others")}>
            <button className="flex items-center gap-2 px-4  rounded-lg transition hover:bg-gray-800">
              Others <FiChevronDown className={`transition-transform ${selectedTab === "others" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {selectedTab === "others" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-[calc(100%_+_5px)] w-56 bg-gray-900 p-4 rounded-lg border border-gray-400 shadow-lg"
                >
                  <div className="flex flex-col gap-2 p-2">
                    {["Paints", "Woods", "Electrical Items", "Furnitures"].map((item, index) => (
                      <span key={index} className="block text-sm text-white transition hover:bg-gray-600 hover:text-white p-2 rounded cursor-pointer">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons */}
        <button className=" bg-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition">
          Book Now
        </button>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white text-2xl"
      >
        <FiMenu />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 p-6 flex flex-col gap-4 z-50"
          >
            <div className="w-full flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-3xl hover:text-teal-400"
              >
                <MdClose />
              </button>
            </div>
            <span className="block text-white py-3 cursor-pointer hover:text-gray-900 transition">
              About
            </span>
            <span className="block text-white py-3 cursor-pointer hover:text-gray-900 transition">
              Nippon Paints
            </span>
            <span className="block text-white py-3 cursor-pointer hover:text-gray-900 transition">
              Woods
            </span>

            {/* Others Dropdown */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => setExpandedMobileTab(expandedMobileTab === "others" ? null : "others")}
                className="flex justify-between w-full text-white py-3"
              >
                Others
                <FiChevronDown
                  className={`transition-transform ${expandedMobileTab === "others" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {expandedMobileTab === "others" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-2 bg-gray-800 rounded-md"
                  >
                    <div className="flex flex-col gap-2 p-2">
                      {["Paints", "Woods", "Electrical Items", "Furnitures"].map((item, index) => (
                        <span key={index} className="block text-sm text-white transition hover:bg-gray-600 hover:text-white p-2 rounded cursor-pointer">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition mt-4">
              Book Now
            </button>
            <button className="bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Nippon Paints", path: "/nippon-paints" },
  { name: "Woods", path: "/woods" },
  { name: "Send Inquiry", path: "/inquiry" },
];

const dropdownItems = [
  { name: "Paints", path: "/paints" },
  { name: "Woods", path: "/woods" },
  { name: "Electrical Items", path: "/electrical" },
  { name: "Furnitures", path: "/furnitures" },
];

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
    <nav className={`fixed w-full z-50 p-4 flex justify-between items-center transition-all duration-300 
      ${isScrolled ? "designColor shadow-lg" : "bg-transparent"} px-6 md:px-20`}
    >
      {/* Logo */}
      <Link to="/" className="text-white text-xl font-bold cursor-pointer">
        Vs Traders
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-12 text-white">
        <div className="relative flex gap-8" onMouseLeave={() => setSelectedTab(null)}>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="cursor-pointer hover:text-gray-200 transition">
              {item.name}
            </Link>
          ))}

          {/* Others Dropdown */}
          <div className="relative" onMouseEnter={() => setSelectedTab("others")}>
            <button className="flex items-center gap-2 px-4 rounded-lg transition hover:bg-gray-800">
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
                  {dropdownItems.map((item, index) => (
                    <Link key={index} to={item.path} className="block text-white p-2 rounded hover:bg-gray-600">
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons */}
        <Link to="/book-now" className="bg-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">
          Book Now
        </Link>
        <Link to="/contact" className="bg-orange-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white text-2xl">
        <FiMenu />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 p-6 flex flex-col gap-4 z-50 overflow-auto"
          >
            <div className="w-full flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl hover:text-teal-400">
                <MdClose />
              </button>
            </div>

            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} className="block text-white py-3 cursor-pointer hover:text-gray-300 transition">
                {item.name}
              </Link>
            ))}

            {/* Others Dropdown for Mobile */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => setExpandedMobileTab(expandedMobileTab === "others" ? null : "others")}
                className="flex justify-between w-full text-white py-3"
              >
                Others
                <FiChevronDown className={`transition-transform ${expandedMobileTab === "others" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {expandedMobileTab === "others" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-2 bg-gray-800 rounded-md"
                  >
                    {dropdownItems.map((item, index) => (
                      <Link key={index} to={item.path} className="block text-white p-2 rounded hover:bg-gray-600">
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Buttons */}
            <Link to="/book-now" className="bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition mt-4">
              Book Now
            </Link>
            <Link to="/contact" className="bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default DropDown;

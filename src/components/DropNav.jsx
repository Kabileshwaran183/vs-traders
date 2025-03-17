import React, { useEffect, useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    <nav className={`fixed w-full z-50 p-4 flex justify-between items-center transition-all duration-300 
        ${isScrolled ? "bg-teal-400" : "bg-[#00000000] "} px-6 md:pr-28 pl-10 z-50`}
    >
      {/* Logo */}
      <Link to="/" className="text-white text-xl font-bold">
        Photography
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-white">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <NonDropdownLinks />
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
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white text-3xl hover:text-teal-400"
      >
            <MdClose  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
            </button>
            </div>
            {TABS.map(({ id, title }) => (
              <div key={id} className="border-b border-gray-700">
                <button
                  onClick={() => setExpandedMobileTab(expandedMobileTab === id ? null : id)}
                  className="flex justify-between w-full text-white py-3"
                >
                  {title}{" "}
                  <FiChevronDown
                    className={`transition-transform ${expandedMobileTab === id ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {expandedMobileTab === id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-2 bg-gray-800 rounded-md"
                    >
                      <DropdownContent selectedTab={expandedMobileTab} isMobile />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Tabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="relative flex gap-6 text-white" onMouseLeave={() => setSelectedTab(null)}>
      <div className="text-center items-center py-4">
        <Link to="/"> <BiHome className="text-center items-center" /></Link>
      </div>
     
      {TABS.map(({ id, title }) => (
        <div key={id} className="relative" onMouseEnter={() => setSelectedTab(id)}>
          
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition hover:bg-gray-800">
            {title}{" "}
            <FiChevronDown
              className={`transition-transform ${selectedTab === id ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {selectedTab === id && <DropdownContent selectedTab={selectedTab} />}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const NonDropdownLinks = () => (
  <div className="flex items-center gap-6">
    {NON_DROPDOWN_LINKS.map(({ title, link }) => (
      <Link key={title} to={link} className="text-white hover:text-gray-900 transition">
        {title}
      </Link>
    ))}
  </div>
);

const DropdownContent = ({ selectedTab, isMobile = false }) => {
  const TabComponent = TABS.find(({ id }) => id === selectedTab)?.Component;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`bg-gray-900 p-4 rounded-lg border border-gray-400 shadow-lg 
        ${isMobile ? "" : "absolute left-0 top-[calc(100%_+_5px)] w-80"}`}
    >
      <TabComponent />
    </motion.div>
  );
};

/* Submenu Style Update */
const Submenu = ({ items }) => (
  <div className="flex flex-col gap-2 p-2">
    {items.map((item, index) => (
      <Link
        key={index}
        to={item.link}
        className="block text-sm text-white transition hover:bg-gray-600 hover:text-white p-2 rounded"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.title}
      </Link>
    ))}
  </div>
);

const Weddings = () => (
  <Submenu
    items={[
      { title: "Outdoor Shoots", link: "/weddings/outdoor" },
      { title: "Pre-Wedding", link: "/weddings/pre-wedding" },
      { title: "Post-Wedding", link: "/weddings/post-wedding" },
    ]}
  />
);

const Gallery = () => (
  <Submenu
    items={[
      { title: "Wedding", link: "/gallery/wedding" },
      { title: "Portraits", link: "/gallery/portraits" },
      { title: "Events", link: "/gallery/events" },
      { title: "Couple Portraits", link: "/gallery/couple-portraits" },
      { title: "Candid Moments", link: "/gallery/candid-moment" },
    ]}
  />
);

const Other = () => (
  <Submenu
    items={[
      { title: "Baby Photography", link: "/other/baby-photography" },
      { title: "Birthday Celebration", link: "/other/birthday-celebration" },
      { title: "Drone Photography", link: "/other/drone-photography" },
      { title: "Video Shoots", link: "/other/video-shoot" },
      { title: "Photo Editing", link: "/other/photo-edit" },
    ]}
  />
);

const About = () => (
  <Submenu
    items={[
      { title: "Our Story", link: "/about/our-story" },
      { title: "Our Team", link: "/about/our-team" },
    ]}
  />
);

const TABS = [
  { id: 1, title: "About", Component: About }, // About is now first in dropdown
  { id: 2, title: "Weddings", Component: Weddings },
  { id: 3, title: "Gallery", Component: Gallery },
  { id: 4, title: "Other", Component: Other },
];

const NON_DROPDOWN_LINKS = [
  { title: "Home", link: "/" }, // Home is a non-dropdown button
  { title: "Book Now", link: "/contact" },
  { title: "Contact", link: "/SeparateView" },
];
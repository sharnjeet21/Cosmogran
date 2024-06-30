import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Snavbar from '../components/Snavbar';
import Subbar from '../components/SubNavbar';
import MySection from '../components/MySection';
import Rightbar from '../components/RightBar';
import '../components/ScrollbarHide.css';

export default function MyPage({ pageData, linkData }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightbarVisible, setIsRightbarVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredSections, setFilteredSections] = useState(pageData.sections); // Initially, show all sections
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);
  const rightbarButtonRef = useRef(null);
  const rightbarRef = useRef(null); // Add a ref for the Rightbar

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close sidebar if clicking outside
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
      // Close rightbar if clicking outside
      if (rightbarRef.current && !rightbarRef.current.contains(event.target) && !rightbarButtonRef.current.contains(event.target)) {
        setIsRightbarVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setCurrentSection(visibleSection.target.id);
        }
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [pageData.sections]);

  // Filter sections based on searchInput for main content (MySection)
  useEffect(() => {
    if (searchInput.trim() === '') {
      setFilteredSections(pageData.sections);
    } else {
      const filtered = pageData.sections.filter(section =>
        section.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredSections(filtered);
    }
  }, [searchInput, pageData.sections]);

  const toggleSidebar = (event) => {
    event.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
    setIsRightbarVisible(false);
  };

  const toggleRightbar = (event) => {
    event.stopPropagation();
    setIsRightbarVisible(!isRightbarVisible);
    setIsSidebarOpen(false);
  };

  const handleSearchInputChange = (inputValue) => {
    setSearchInput(inputValue);
  };

  return (
    <div>
      <Snavbar handleSearch={handleSearchInputChange} />
      <Subbar isVisible={window.innerWidth < 768} />
      <div className="flex h-screen">
        <div ref={sidebarRef} className={`fixed z-50 top-0 w-64 h-full bg-primary overflow-y-auto scrollbar-hide lg:block ${isSidebarOpen ? '' : 'hidden'}`}>
          <Sidebar data={linkData} />
        </div>
        <div className="flex-1 overflow-y-auto bg-primary lg:ml-28">
          <div className="relative px-12 lg:pt-28 lg:pl-48 pt-24">
            <div>
              <h1 className="text-cyan-300 font-Rey text-4xl">{pageData.pageTitle}</h1>
              <h2 className='h-px my-6 mt-12 bg-[#96969c] border-0' />
              {filteredSections.map((section, index) => (
                <MySection key={index} title={section.title} section={section} />
              ))}
            </div>
            <h2 className="text-sm text-gray-400 no-underline mt-1 block"></h2>
          </div>
        </div>
      </div>
      <div className="fixed lg:hidden flex justify-between items-center top-16 w-full px-4 z-0">
        <button ref={menuButtonRef} onClick={toggleSidebar} className="text-secondary py-5 px-4 rounded ">Menu</button>
        {!isRightbarVisible && (
          <button ref={rightbarButtonRef} onClick={toggleRightbar} className="text-secondary my-5 px-4 rounded ">On This Page</button>
        )}
      </div>
      <Rightbar ref={rightbarRef} sections={pageData.sections} currentSection={currentSection} isVisible={isRightbarVisible || window.innerWidth >= 1024} />
    </div>
  );
}

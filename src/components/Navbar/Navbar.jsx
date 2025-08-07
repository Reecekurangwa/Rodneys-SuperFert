// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // NEW: Import useLocation hook

// Array of navigation items
const navItems = [
  { name: 'Home', path: '/', id: 'home-section', isClickable: true }, // Added 'path' for URL matching
  { name: 'About Us', path: '/who-we-are', id: 'about-us-section', isClickable: true }, // Added 'path'
  { name: 'Crops & Fertilizers', path: '/crops-fertilizers', id: 'crops-fertilizers-section', isClickable: false },
  { name: 'Services', path: '/services', id: 'services-section', isClickable: false },
  { name: 'News & Events', path: '/News', id: 'news-events-section', isClickable: true }, // Added 'path'
  { name: 'Contact Us', path: '/contact-us', id: 'contact-us-section', isClickable: false },
];

const Navbar = () => {
  const location = useLocation(); // NEW: Get the current location object from React Router
  const [activeSection, setActiveSection] = useState('');

  // EFFECT: Initialize activeSection based on the current URL path
  useEffect(() => {
    // Find the nav item that matches the current URL path
    const currentNavItem = navItems.find(item => item.isClickable && item.path === location.pathname);
    if (currentNavItem) {
      setActiveSection(currentNavItem.id);
    } else if (location.pathname === '/') {
      // Special case for root path if it doesn't directly match 'home-section'
      setActiveSection('home-section');
    }

    // Also, ensure smooth scroll to the top of the current section on initial load
    // This handles cases where a direct URL might include a hash, or just ensures
    // the page starts at the top of the relevant section.
    const hashId = location.hash ? location.hash.substring(1) : '';
    if (hashId) {
      const element = document.getElementById(hashId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    } else if (currentNavItem) {
        // If no hash, but a current nav item exists, scroll to its section
        const element = document.getElementById(currentNavItem.id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 70,
                behavior: 'smooth',
            });
        }
    }

  }, [location.pathname, location.hash]); // Re-run effect if path or hash changes

  // EFFECT: This runs on scroll to determine the active section (for dynamic highlighting as user scrolls)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.filter(item => item.isClickable).map(item => document.getElementById(item.id));
      const currentScrollPos = window.scrollY + window.innerHeight / 2;

      let foundActive = false;
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
            setActiveSection(section.id);
            foundActive = true;
            break; // Found the active section, no need to check others
          }
        }
      }
      // If no section is in view (e.g., at the very top of the page before any section starts),
      // you might want to default to 'home-section' or keep it empty.
      // For now, we'll let the initial useEffect handle the page load active state.
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to smoothly scroll to a section when a link is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth',
      });
      setActiveSection(id); // Immediately update active state on click
      // Update URL hash to reflect the section for direct linking/refresh
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {navItems.map((item) => (
          item.isClickable ? (
            <a
              key={item.id}
              href={item.path ? item.path : `#${item.id}`} // Use path for router navigation, fallback to hash
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor jump
                if (item.path && location.pathname !== item.path) {
                  // If clicking a link to a different page, navigate with React Router
                  window.location.href = item.path; // Or use useNavigate hook if available
                } else {
                  // If on the same page, or no path defined, use smooth scroll
                  scrollToSection(item.id);
                }
              }}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.name}
            </a>
          ) : (
            <span key={item.id} className="nav-item-disabled">
              {item.name}
            </span>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

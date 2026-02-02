import { useEffect, useState, useRef, type FC } from "react";

// Custom throttle function to avoid lodash dependency
const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) & { cancel: () => void } => {
  let timeout: NodeJS.Timeout | null = null;
  let previous = 0;
  
  const throttled = function (this: any, ...args: Parameters<T>) {
    const now = Date.now();
    const remaining = wait - (now - previous);
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  } as ((...args: Parameters<T>) => void) & { cancel: () => void };
  
  throttled.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  return throttled;
};

const Header: FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const whatsappButtonRef = useRef<HTMLAnchorElement>(null);
  const whatsappFlairRef = useRef<HTMLSpanElement>(null);
  const headerOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const y = window.scrollY;
      const shouldBeFixed = y >= 100;
      setScroll(shouldBeFixed);

      // Update active section based on scroll position
      // Don't set active section if we're on privacy-policy or terms-and-conditions pages
      const currentPath = window.location.pathname;
      if (currentPath !== "/privacy-policy" && currentPath !== "/terms-and-conditions") {
        const sections = ["home", "newfeatured", "how-it-works2", "faq", "contact"];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (current) setActiveSection(current);
      } else {
        // Clear active section on policy pages
        setActiveSection("");
      }

      // Header styling on scroll with smooth z-index transitions
      const isMobile = window.innerWidth < 992;
      const header = document.querySelector('header') as HTMLElement;
      if (header) {
        // Update header padding based on scroll state
        if (shouldBeFixed) {
          header.style.paddingTop = 'clamp(0.05rem, 0.4vw, 0.15rem)';
          header.style.paddingBottom = 'clamp(0.05rem, 0.4vw, 0.15rem)';
        } else {
          header.style.paddingTop = 'clamp(0.15rem, 0.8vw, 0.35rem)';
          header.style.paddingBottom = 'clamp(0.15rem, 0.8vw, 0.35rem)';
        }
        
        // Update logo size based on scroll state
        const logoImg = header.querySelector('.header-logo') as HTMLElement;
        if (logoImg) {
          if (shouldBeFixed) {
            logoImg.style.height = 'clamp(28px, 5vw, 50px)';
            logoImg.style.width = 'clamp(140px, 18vw, 220px)';
            logoImg.style.maxHeight = 'clamp(28px, 5vw, 50px)';
          } else {
            logoImg.style.height = 'clamp(32px, 6vw, 60px)';
            logoImg.style.width = 'clamp(160px, 22vw, 260px)';
            logoImg.style.maxHeight = 'clamp(32px, 6vw, 60px)';
          }
        }
        
        if (isMobile) {
          // On mobile: header always on top (no overlap)
          header.style.zIndex = '9999';
          // Keep visual style identical - no backdrop-filter or background changes
          header.style.backdropFilter = 'none';
          header.style.backgroundColor = '#FFFFFF';
          header.style.transition = 'z-index 0.3s ease-out';
          
          // Hide overlay on mobile
          if (headerOverlayRef.current) {
            headerOverlayRef.current.style.display = 'none';
          }
        } else {
          // Desktop: overlap behavior
          if (shouldBeFixed) {
            // When scrolled, header comes to front
            header.style.zIndex = '9999';
            // Keep visual style identical - no backdrop-filter or background changes
            header.style.backdropFilter = 'none';
            header.style.backgroundColor = '#FFFFFF';
            header.style.transition = 'z-index 0.3s ease-out';
            // Hide overlay when scrolled (header handles clicks)
            if (headerOverlayRef.current) {
              headerOverlayRef.current.style.display = 'none';
            }
          } else {
            // Initially, header is behind hero for visual overlap
            header.style.zIndex = '1000';
            header.style.backdropFilter = 'none';
            header.style.backgroundColor = '#FFFFFF';
            header.style.transition = 'z-index 0.3s ease-out';
            // Show transparent overlay for clickability
            if (headerOverlayRef.current) {
              headerOverlayRef.current.style.display = 'block';
              // Update overlay height to match actual header height
              const headerRect = header.getBoundingClientRect();
              headerOverlayRef.current.style.height = `${headerRect.height}px`;
            }
          }
        }
      }
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call to set correct z-index
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  useEffect(() => {
    const button = whatsappButtonRef.current;
    const flair = whatsappFlairRef.current;
    
    if (!button || !flair) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate cursor position as percentage
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      
      // Set transform origin to cursor position, fill expands to opposite
      flair.style.transformOrigin = `${percentX}% ${percentY}%`;
      
      // Ensure smooth transition
      if (!flair.style.transition) {
        flair.style.transition = 'transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)';
      }
    };

    const handleMouseEnter = () => {
      button.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      button.removeEventListener('mousemove', handleMouseMove);
      flair.style.transformOrigin = '50% 50%';
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  // Ensure Phosphor icons are loaded for mobile menu
  useEffect(() => {
    // Preload Phosphor icons CSS if not already loaded
    const iconWeights = ["regular", "bold"];
    iconWeights.forEach((weight) => {
      const linkId = `phosphor-${weight}`;
      if (!document.getElementById(linkId)) {
        const link = document.createElement("link");
        link.id = linkId;
        link.rel = "stylesheet";
        link.href = `https://unpkg.com/@phosphor-icons/web@2.1.1/src/${weight}/style.css`;
        document.head.appendChild(link);
      }
    });
  }, []);

  // Update overlay height to match header height
  useEffect(() => {
    if (!scroll && headerOverlayRef.current) {
      const header = document.querySelector('header') as HTMLElement;
      if (header) {
        const updateOverlayHeight = () => {
          if (headerOverlayRef.current && !scroll) {
            const headerRect = header.getBoundingClientRect();
            headerOverlayRef.current.style.height = `${headerRect.height}px`;
          }
        };
        
        // Update on mount and when scroll state changes
        updateOverlayHeight();
        
        // Use ResizeObserver to update when header size changes
        const resizeObserver = new ResizeObserver(updateOverlayHeight);
        resizeObserver.observe(header);
        
        return () => resizeObserver.disconnect();
      }
    }
  }, [scroll]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#newfeatured" },
    { label: "How It Works", href: "#how-it-works2" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`header bg-white transition-all ${
          scroll && "fixed-header"
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: "translateY(0)",
          pointerEvents: "auto",
          paddingTop: scroll ? "clamp(0.05rem, 0.4vw, 0.15rem)" : "clamp(0.15rem, 0.8vw, 0.35rem)",
          paddingBottom: scroll ? "clamp(0.05rem, 0.4vw, 0.15rem)" : "clamp(0.15rem, 0.8vw, 0.35rem)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className='container container-two' style={{ paddingLeft: "clamp(1rem, 3vw, 2rem)", paddingRight: "clamp(1rem, 3vw, 2rem)", width: "100%", display: "flex", alignItems: "center" }}>
          <nav className='d-flex align-items-center justify-content-between' style={{ gap: "clamp(0.5rem, 2vw, 1rem)", width: "100%", alignItems: "center" }}>
            {/* Logo Start */}
            <div className='logo' style={{ 
              minWidth: "clamp(160px, 22vw, 260px)",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}>
              <a
                href='#home'
                className='link hover--translate-y-1 active--translate-y-scale-9'
                style={{ textDecoration: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
                onClick={(e) => {
                  const currentPath = window.location.pathname;
                  // If we're on policy pages, navigate to home first
                  if (currentPath === "/privacy-policy" || currentPath === "/terms-and-conditions") {
                    e.preventDefault();
                    // Navigate to home page
                    window.history.pushState({}, "", "/");
                    window.dispatchEvent(new PopStateEvent("popstate"));
                    // Wait for page to render, then scroll to home
                    setTimeout(() => {
                      const element = document.getElementById("home");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      } else {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }, 100);
                  }
                }}
              >
                <img
                  src='/assets/images/logo/Logo.svg'
                  alt='Baitech Logo'
                  className="header-logo"
                  style={{ 
                    height: scroll ? "clamp(28px, 5vw, 50px)" : "clamp(32px, 6vw, 60px)", 
                    width: scroll ? "clamp(140px, 18vw, 220px)" : "clamp(160px, 22vw, 260px)", 
                    maxHeight: scroll ? "clamp(28px, 5vw, 50px)" : "clamp(32px, 6vw, 60px)",
                    objectFit: "contain",
                    transition: "height 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </a>
            </div>

            {/* Menu Start */}
            <div className='header-menu d-lg-block d-none' style={{ flex: "1 1 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ul className='nav-menu d-lg-flex align-items-center tw-gap-7' style={{ margin: 0, padding: 0, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                {navItems.map((item) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <li
                      key={item.label}
                      className={`nav-menu__item ${
                        isActive ? "activePage" : ""
                      }`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <a
                        href={item.href}
                        className='nav-menu__link text-heading tw-py-9 fw-semibold w-100'
                        style={{
                          color: isActive ? "#1ECAD3" : "#002B49",
                          textDecoration: "none",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={(e) => {
                          const currentPath = window.location.pathname;
                          // If we're on policy pages, navigate to home first
                          if (currentPath === "/privacy-policy" || currentPath === "/terms-and-conditions") {
                            e.preventDefault();
                            // Navigate to home page
                            window.history.pushState({}, "", "/");
                            window.dispatchEvent(new PopStateEvent("popstate"));
                            // Wait for page to render, then scroll to target section
                            setTimeout(() => {
                              const targetId = item.href.substring(1);
                              const element = document.getElementById(targetId);
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth", block: "start" });
                              } else {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }
                            }, 100);
                          }
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.color = "#1ECAD3";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.color = isActive ? "#1ECAD3" : "#002B49";
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Header Right start */}
            <div className='d-flex align-items-center tw-gap-4 header-right-mobile' style={{ gap: "clamp(0.5rem, 2vw, 1.5rem)", flexShrink: 0, alignItems: "center" }}>
              {/* Register On Text - Desktop Only */}
              <span 
                className="d-lg-block d-none"
                style={{
                  fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                  fontWeight: 400,
                  color: "#002B49",
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap",
                }}
              >
                Register on
              </span>
              <a
                ref={whatsappButtonRef}
                href='https://wa.me/97312345678'
                target='_blank'
                rel='noopener noreferrer'
                className="hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-sm-inline-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-9 rounded-pill tw-py-4 fw-semibold common-shadow-inset-one btn-navy"
                data-block="button"
                style={{
                  backgroundColor: "#002B49",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  fontSize: "clamp(0.75rem, 2vw, 1rem)",
                  padding: "clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <span ref={whatsappFlairRef} className="button__flair"></span>
                <span className="button__label">WhatsApp</span>
              </a>
              <button
                onClick={handleMobileMenu}
                type='button'
                className='toggle-mobileMenu leading-none d-lg-none text-neutral-800 tw-text-9'
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "clamp(20px, 5vw, 24px)",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className='ph ph-list' />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu d-lg-none d-block scroll-sm position-fixed bg-white tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-10000 tw--translate-x-full tw-pb-68 ${
          mobileMenu && "active"
        }`}
        style={{
          transform: mobileMenu ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <button
          onClick={handleMobileMenu}
          type='button'
          className='close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 rounded-circle d-flex justify-content-center align-items-center'
          style={{
            background: "#f0f0f0",
            border: "none",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          <i className='ph ph-x' />
        </button>
        <div className='mobile-menu__inner'>
          <a 
            href='#home' 
            className='mobile-menu__logo' 
            onClick={(e) => {
              const currentPath = window.location.pathname;
              // If we're on policy pages, navigate to home first
              if (currentPath === "/privacy-policy" || currentPath === "/terms-and-conditions") {
                e.preventDefault();
                window.history.pushState({}, "", "/");
                window.dispatchEvent(new PopStateEvent("popstate"));
                setTimeout(() => {
                  const element = document.getElementById("home");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }, 100);
              }
              handleMobileMenu();
            }}
          >
            <img
              src='/assets/images/logo/Logo.svg'
              alt='Baitech Logo'
              className="mobile-menu-logo"
              style={{ height: "clamp(55px, 11vw, 60px)", width: "auto", maxHeight: "clamp(55px, 11vw, 60px)" }}
            />
          </a>

          <div className='mobile-menu__menu'>
            <ul className='nav-menu d-lg-flex align-items-center nav-menu--mobile d-block tw-mt-8'>
              {navItems.map((item) => (
                <li key={item.label} className='nav-menu__item'>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      const currentPath = window.location.pathname;
                      // If we're on policy pages, navigate to home first
                      if (currentPath === "/privacy-policy" || currentPath === "/terms-and-conditions") {
                        e.preventDefault();
                        // Navigate to home page
                        window.history.pushState({}, "", "/");
                        window.dispatchEvent(new PopStateEvent("popstate"));
                        // Wait for page to render, then scroll to target section
                        setTimeout(() => {
                          const targetId = item.href.substring(1);
                          const element = document.getElementById(targetId);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          } else {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }, 100);
                      }
                      handleMobileMenu();
                    }}
                    className='nav-menu__link text-heading tw-py-9 fw-semibold w-100'
                    style={{
                      color: "#002B49",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Transparent clickable overlay for header buttons before scroll (Desktop only) */}
      <div
        ref={headerOverlayRef}
        className="d-lg-block d-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'clamp(60px, 8vw, 80px)',
          zIndex: 10001,
          pointerEvents: scroll ? 'none' : 'auto',
          backgroundColor: 'transparent',
          display: scroll ? 'none' : 'block',
          cursor: 'default',
        }}
        onMouseMove={(e) => {
          // Find which header menu item is below cursor
          const header = document.querySelector('header');
          if (!header) return;
          
          // Check if cursor is over any clickable element
          const clickableElements = header.querySelectorAll('a, button') as NodeListOf<HTMLElement>;
          let isOverClickable = false;
          
          clickableElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (
              e.clientX >= rect.left &&
              e.clientX <= rect.right &&
              e.clientY >= rect.top &&
              e.clientY <= rect.bottom
            ) {
              isOverClickable = true;
              // Update cursor style on the overlay
              if (headerOverlayRef.current) {
                headerOverlayRef.current.style.cursor = 'pointer';
              }
            }
          });
          
          // If not over clickable element, reset cursor
          if (!isOverClickable && headerOverlayRef.current) {
            headerOverlayRef.current.style.cursor = 'default';
          }
          
          // Handle nav links
          const navLinks = header.querySelectorAll('.nav-menu__link') as NodeListOf<HTMLElement>;
          navLinks.forEach((link) => {
            const rect = link.getBoundingClientRect();
            if (
              e.clientX >= rect.left &&
              e.clientX <= rect.right &&
              e.clientY >= rect.top &&
              e.clientY <= rect.bottom
            ) {
              // Apply hover style
              link.style.color = '#1ECAD3';
              link.style.transform = 'translateY(-2px)';
            } else {
              // Remove hover style
              const isActive = link.closest('.nav-menu__item')?.classList.contains('activePage');
              link.style.color = isActive ? '#1ECAD3' : '#002B49';
              link.style.transform = 'translateY(0)';
            }
          });
          
          // Handle WhatsApp button hover
          const whatsappButton = whatsappButtonRef.current;
          const whatsappFlair = whatsappFlairRef.current;
          if (whatsappButton && whatsappFlair) {
            const rect = whatsappButton.getBoundingClientRect();
            if (
              e.clientX >= rect.left &&
              e.clientX <= rect.right &&
              e.clientY >= rect.top &&
              e.clientY <= rect.bottom
            ) {
              // Manually trigger hover effect
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const percentX = (x / rect.width) * 100;
              const percentY = (y / rect.height) * 100;
              whatsappFlair.style.transformOrigin = `${percentX}% ${percentY}%`;
              whatsappFlair.style.transform = 'scale(1)';
              if (!whatsappFlair.style.transition) {
                whatsappFlair.style.transition = 'transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)';
              }
              // Trigger the CSS hover state by adding a class
              whatsappButton.classList.add('group');
            } else {
              whatsappButton.classList.remove('group');
            }
          }
          
          // Handle logo hover
          const logoLink = header.querySelector('.logo a') as HTMLElement;
          if (logoLink) {
            const rect = logoLink.getBoundingClientRect();
            if (
              e.clientX >= rect.left &&
              e.clientX <= rect.right &&
              e.clientY >= rect.top &&
              e.clientY <= rect.bottom
            ) {
              if (headerOverlayRef.current) {
                headerOverlayRef.current.style.cursor = 'pointer';
              }
            }
          }
        }}
        onMouseLeave={() => {
          // Reset cursor
          if (headerOverlayRef.current) {
            headerOverlayRef.current.style.cursor = 'default';
          }
          
          // Reset all header menu items
          const header = document.querySelector('header');
          if (!header) return;
          
          const navLinks = header.querySelectorAll('.nav-menu__link') as NodeListOf<HTMLElement>;
          navLinks.forEach((link) => {
            const isActive = link.closest('.nav-menu__item')?.classList.contains('activePage');
            link.style.color = isActive ? '#1ECAD3' : '#002B49';
            link.style.transform = 'translateY(0)';
          });
          
          // Reset WhatsApp button
          const whatsappButton = whatsappButtonRef.current;
          const whatsappFlair = whatsappFlairRef.current;
          if (whatsappButton && whatsappFlair) {
            whatsappButton.classList.remove('group');
            whatsappFlair.style.transformOrigin = '50% 50%';
            whatsappFlair.style.transform = 'scale(0)';
          }
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          
          // Get the header element
          const header = document.querySelector('header');
          if (!header) return;
          
          // Find all clickable elements in header (nav links, buttons)
          const clickableElements = header.querySelectorAll('a, button') as NodeListOf<HTMLElement>;
          
          // Find which element is at/near the click position
          let targetElement: HTMLElement | null = null;
          let minDistance = Infinity;
          
          clickableElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const clickX = e.clientX;
            const clickY = e.clientY;
            
            // Check if click is within element bounds
            if (
              clickX >= rect.left &&
              clickX <= rect.right &&
              clickY >= rect.top &&
              clickY <= rect.bottom
            ) {
              // Calculate center distance for preference
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              const distance = Math.sqrt(
                Math.pow(clickX - centerX, 2) + Math.pow(clickY - centerY, 2)
              );
              
              if (distance < minDistance) {
                minDistance = distance;
                targetElement = el;
              }
            }
          });
          
          // Trigger click on the found element
          if (targetElement) {
            (targetElement as HTMLElement).click();
          }
        }}
      />
      
      {/* Sticky WhatsApp Floating Button - Mobile Only */}
      <a
        href='https://wa.me/97312345678'
        target='_blank'
        rel='noopener noreferrer'
        className='floating-whatsapp-btn'
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
          zIndex: 9998,
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.transform = 'scale(0.95)';
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <svg
          width='28'
          height='28'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
            fill='#FFFFFF'
          />
        </svg>
      </a>
    </>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = document.querySelectorAll('section[id]');
  const navHighlighter = () => {
    let scrollY = window.pageYOffset;
    document.querySelectorAll('nav li').forEach((list) => {
      list.classList.remove('text-sea-blue');
    });

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 64;
      let sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector('nav li a[href*=' + sectionId + ']')
          .classList.add('text-sea-blue');
      } else {
        document
          .querySelector('nav li a[href*=' + sectionId + ']')
          .classList.remove('text-sea-blue');
      }
    });
  };

  window.addEventListener('scroll', navHighlighter);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-[#141414]/80' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Hyejin portfolio
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 abcd">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-sea-blue bold' : 'text-white'
              } text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="hover:text-sea-blue hover:bold">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[25px] h-[25px] object-contain z-10"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'block'
            } w-full h-screen absolute top-0 right-0 bg-black/50 `}
          >
            <ul className="w-60 h-full absolute top-0 right-0 list-none flex items-start flex-1 flex-col gap-8 p-4 pt-20 border-l purple-border-image black-bg">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-sea-blue bold' : 'text-white'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className={`${
          styles.marginX
        } fixed bottom-8 right-0 w-10 h-10 bg-contain scroll-top ${
          scrolled ? 'block' : 'hidden'
        }`}
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
      ></Link>
    </nav>
  );
};

export default Navbar;

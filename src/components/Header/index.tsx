import React, { useEffect, useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import UserHeader from '../UserHeader';

interface NavItem {
  label: string;
  href: string;
}
const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Menu',
    href: '/dish',
  },
  {
    label: 'Reservation',
    href: '/booking',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  // {
  //   label: 'Login',
  //   href: '/login',
  // },
];
const HeaderWrapper = styled.div`
  z-index: 2;
  .nav-item {
    span {
      &:after {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        content: '';
        width: 100%;
        height: 3px;
        background-color: var(--color-red);
        transform-origin: center;
        transform: scaleX(0);
        transition: all 0.3s linear;
      }
      &.active,
      &:hover {
        transition: all 0.3s linear;
        text-shadow: 1px 1px 1px #ffff;
        &:after {
          transform: scaleX(1);
        }
      }
    }
  }
  .transition-width {
    transition-property: width;
  }
`;
const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isHomePage, setIsHomePage] = useState<boolean>(
    router.pathname === '/'
  );
  const ImgBaseUrl = `${router.basePath}/assets/images`;
  const handleScroll = () => {
    if (window.scrollY > 20) setIsScrolled(true);
    else setIsScrolled(false);
  };
  const handleOpen = () => {
    setIsOpened(!isOpened);
  };
  useEffect(() => {
    setIsHomePage(router.pathname === '/');
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <HeaderWrapper
      className={`w-full fixed bg-black delay-75 transition-width duration-75 ${
        isHomePage ? '' : 'border-b shadow-header'
      } ${isScrolled || isOpened ? 'border-b shadow-header' : ''}`}
    >
      <div
        className={`flex justify-between items-center md:w-11/12 xl:w-4/5 mx-auto px-3 sm:px-4 relative transition-all ${
          isScrolled ? 'py-2 sm:py-3 md:py-4' : 'py-3 sm:py-5 md:py-6'
        }`}
      >
        <div className="">
          <Link href="/">
            <img
              src={`${ImgBaseUrl}/logo.png`}
              alt=""
              className={`object-contain cursor-pointer transition-all ${
                isScrolled ? 'h-16 sm:h-18' : 'h-18 sm:h-20 xl:h-24'
              }`}
            />
          </Link>
        </div>
        <div className="md:hidden transition-all mr-2" onClick={handleOpen}>
          {isOpened ? (
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              className="h-7 cursor-pointer"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              className="h-7 cursor-pointer"
            />
          )}
        </div>

        <div
          className={`absolute overflow-hidden transition-width duration-300 md:overflow-visible md:pt-0 md:static md:w-full bg-black top-full right-0 md:right-auto md:left-0 md:h-auto border-l shadow-header md:border-0 md:shadow-none ${
            isOpened
              ? 'h-screen pt-0 border-t md:border-t-0 w-10/12 sm:w-1/2'
              : 'h-0 pt-0 border-t-0 w-0'
          }`}
        >
          {/* <div className="w-10/12  sm:w-1/2 bg-black md:w-auto h-full md:h-auto float-right md:float-none border-l shadow-header md:border-0 md:shadow-none"> */}
          <ul className="flex flex-col md:flex-row w-full md:w-auto items-start md:items-center justify-end pt-4 md:pt-0">
            {
              /* Menu, Book a table, About, Careers, Contact,  DishItem, your order,login */
              NAV_ITEMS.map((item, id) => {
                return (
                  <li key={id} className="nav-item px-10 md:px-0">
                    <Link href={item.href}>
                      <span
                        className={`text-lg inline-block relative cursor-pointer transition-all text-white md:px-4 py-4 sm:py-5 md:py-3 lg:mx-4 ${
                          router.pathname.includes(item.href)
                            ? 'active font-medium'
                            : ''
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })
            }
            <UserHeader
              currentUser={{
                displayName: 'thuydo',
                thumnailUrl: `${ImgBaseUrl}/chefs/1.jpg`,
              }}
              className="m-4 md:m-0 order-first md:order-last"
            />
          </ul>
          {/* </div> */}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

import React from 'react';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  span,
  a,
  p {
    font-size: 0.9rem !important;
  }
  svg {
    overflow: visible !important;
    height: 25px;
  }
`;
const Footer = () => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images`;
  return (
    <FooterWrapper className="border-t shadow-header">
      <div className="md:w-11/12 xl:w-4/5 mx-auto px-4 sm:pl-5 sm:pr-6 pt-14 ">
        <div className="flex flex-wrap items-start justify-between pb-5 sm:pb-0">
          <ul className="pb-8 w-1/2 sm:w-auto sm:pb-5">
            <li className="cursor-pointer pb-8">
              <img
                src={`${ImgBaseUrl}/logo.png`}
                alt="FudGud"
                className="h-20 object-contain"
              />
            </li>
            <li className="cursor-pointer">
              <a
                className="flex items-center justify-start py-2"
                href="https://goo.gl/maps/cdQja1MZ3RP9N9u58"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} size="xs" />
                <span className="pl-2">Hanoi, VietNam</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="flex items-center justify-start py-2"
                href="tel:0977002602"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  size="xs"
                  transform={{ rotate: -42 }}
                />
                <span className="pl-2">+0977002602</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="flex items-center justify-start py-2"
                href="mailto:dothuy302000@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} size="xs" />

                <span className="pl-2">dothuy302000@gmail.com</span>
              </a>
            </li>
          </ul>
          <ul className="pb-8 sm:pb-5 w-2/5 sm:w-auto">
            <li>
              <h3 className="text-lg font-medium mb-4">Menu</h3>
            </li>
            <li className="cursor-pointer">
              <Link href="/menu">
                <span className="py-2 inline-block">Main Dish</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/menu">
                <span className="py-2 inline-block">Drinks</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/menu">
                <span className="py-2 inline-block">Desserts</span>
              </Link>
            </li>
          </ul>
          <ul className="pb-8 sm:pb-5 w-1/2 sm:w-auto">
            <li>
              <h3 className="text-lg font-medium mb-4">Booking</h3>
            </li>
            <li className="cursor-pointer">
              <Link href="/bookatable">
                <span className="py-2 inline-block">Book a Table</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/bookatable">
                <span className="py-2 inline-block">Order</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/bookatable">
                <span className="py-2 inline-block">Your invoice</span>
              </Link>
            </li>
          </ul>
          <ul className="pb-8 sm:pb-5 w-2/5 sm:w-auto">
            <li>
              <h3 className="text-lg font-medium mb-4">Restaurant</h3>
            </li>
            <li className="cursor-pointer">
              <Link href="/about">
                <span className="py-2 inline-block">About Us</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/careers">
                <span className="py-2 inline-block">Careers</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/contact">
                <span className="py-2 inline-block">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <p className="font-medium py-8 sm:py-12 text-center sm:text-left border-t border-white sm:border-transparent">
          © {new Date().getFullYear()} FugGud Vietnam by thuysddoox.{' '}
          <span className="block sm:inline">All Rights Reserved.</span>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

import React from 'react';
import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhoneVolume,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ContactInformationWrap = styled.div`
  svg {
    overflow: visible !important;
    height: 20px;
  }
  a:hover {
    h3 {
      color: var(--color-red) !important;
      transition: all 0.3s linear;
    }
    path {
      fill: var(--color-red) !important;
      transition: all 0.3s linear;
    }
  }
  @media screen and (max-width: 768px) {
    .mb-column {
      flex-direction: column !important;
      align-items: start !important;
      justify-content: flex-start !important;
      padding: 1rem !important;
      li {
        padding: 1rem !important;
      }
    }
    .mb-p-0 {
      padding: 0 !important;
    }
  }
`;
const ContactInformation = () => {
  return (
    <ContactInformationWrap className="bg-yellow">
      <ul className="flex items-center mb-column justify-around text-white md:w-11/12 mx-auto px-3 sm:px-4">
        <li className="cursor-pointer p-6">
          <a
            className="flex items-center justify-start py-2 mb-p-0"
            href="https://goo.gl/maps/cdQja1MZ3RP9N9u58"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} size="xs" />
            <div className="pl-4">
              <h3 className="font-semibold">Hanoi, VietNam</h3>
            </div>
          </a>
        </li>
        <li className="cursor-pointer p-6">
          <a
            className="flex items-center justify-start py-2 mb-p-0"
            href="tel:0977002602"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faPhoneVolume}
              size="xs"
              transform={{ rotate: -42 }}
            />
            <div className="pl-4">
              <h3 className="font-semibold">+0977002602</h3>
            </div>
          </a>
        </li>
        <li className="p-6">
          <div className="flex items-center justify-start py-2 mb-p-0">
            <FontAwesomeIcon icon={faClock} size="xs" />
            <div className="pl-4">
              <h3 className="font-semibold">Open Monday-Sunday</h3>
              <p>8:00am - 9:00pm</p>
            </div>
          </div>
        </li>
        <li className="flex p-6">
          <a
            className="flex items-center justify-start pr-4 cursor-pointer"
            href="mailto:dothuy302000@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="xs" />
          </a>
          <a
            className="flex items-center justify-start pr-4 cursor-pointer"
            href="mailto:dothuy302000@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="xs" />
          </a>
          <a
            className="flex items-center justify-start pr-4 cursor-pointer"
            href="mailto:dothuy302000@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} size="xs" />
          </a>
        </li>
      </ul>
    </ContactInformationWrap>
  );
};
export default ContactInformation;

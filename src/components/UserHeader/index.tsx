import React from 'react';
import {
  faShoppingBasket,
  faBell,
  faChevronDown,
  faChevronUp,
  faAddressCard,
  faFileInvoiceDollar,
  faArrowCircleLeft,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { User } from '../../utils/interfaces';

const UserHeaderWrapper = styled.div`
  .card {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
    transform: scale(0);
    transform-origin: 50% 50%;
    opacity: 0.5;
    transition: all 0.3s;
    &:after {
      content: '';
      position: absolute;
      top: -20px;
      transform: translateX(-50%);
      display: block;
      border: 12px solid;
      border-color: transparent transparent white transparent;
    }
  }
  .card-user.block {
    transform: scale(1);
    transition: all 0.5s;
    opacity: 1;
    &:after {
      left: 25%;
      @media screen and (max-width: 992px) {
        left: 11%;
      }
    }
  }
  .user-info:hover .username {
    color: var(--color-green);
  }
  .card-user {
    li:hover {
      background: var(--color-red);
      span {
        color: white;
      }
      path {
        fill: white;
      }
    }
    path {
      fill: var(--color-green);
    }
  }
  .card-hover:hover {
    path {
      fill: var(--color-green);
    }
    .card-data {
      transform: translateX(-50%) scale(1);
      transition: all 0.3s;
      opacity: 1;
    }
  }
  .card-data {
    &:after {
      left: 50%;
    }
  }
`;

const UserHeader = ({
  currentUser,
  className,
}: {
  currentUser: User;
  className?: any;
}) => {
  const [isShowed, setIsShowed] = React.useState<boolean>(false);
  return (
    <UserHeaderWrapper className={className}>
      <div className="flex items-center justify-around ">
        <div className="order-2 md:order-1">
          <ul className="items-center mr-4 flex">
            <li className="mx-2 cursor-pointer order-3 md:order-1 relative card-hover">
              <FontAwesomeIcon icon={faShoppingBasket} className="w-5" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white w-80 mt-4 card card-data py-6 px-4">
                <p className="text-black text-center text-mb ">No data.</p>
              </div>
            </li>
            <li className="mx-2 cursor-pointer order-2 md:order-2 relative card-hover">
              <FontAwesomeIcon icon={faBell} className="w-4" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white w-80 mt-4 card card-data py-6 px-4">
                <p className="text-black text-center text-mb ">No data.</p>
              </div>
            </li>
            <li className="mr-2 ml-3 text-gray-300 order-1 md:order-3">|</li>
          </ul>
        </div>
        <div
          onClick={() => setIsShowed(!isShowed)}
          className="user-info relative flex items-center justify-around cursor-pointer order-1 md:order-2"
        >
          <img
            src={currentUser.thumnailUrl}
            className="w-8 rounded-full h-8 object-cover"
          />
          <h3 className="mx-2 username text-red">{currentUser.displayName}</h3>
          <FontAwesomeIcon
            icon={!isShowed ? faChevronDown : faChevronUp}
            className="w-3"
          />
          <div
            className={`absolute top-full left-0 md:left-auto md:right-0 bg-white mt-2 card card-user ${
              isShowed ? 'block' : 'hidden'
            }`}
          >
            <ul className="flex flex-col w-max pt-4 pb-6">
              <li
                onClick={() => setIsShowed(!isShowed)}
                className="block px-6 py-2 flex items-center"
              >
                <FontAwesomeIcon icon={faAddressCard} className="w-5" />
                <span className="text-black ml-3"> Profile</span>
              </li>
              <li
                onClick={() => setIsShowed(!isShowed)}
                className="block px-6 py-2 flex items-center"
              >
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-5" />
                <span className="text-black ml-3"> Order </span>
              </li>
              <li
                onClick={() => setIsShowed(!isShowed)}
                className="block px-6 py-2 flex items-center"
              >
                <FontAwesomeIcon icon={faClipboardList} className="w-5" />
                <span className="text-black ml-3"> History</span>
              </li>
              <li
                onClick={() => setIsShowed(!isShowed)}
                className="block px-6 py-2 flex items-center"
              >
                <FontAwesomeIcon icon={faArrowCircleLeft} />
                <span className="text-black ml-3"> Logout </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UserHeaderWrapper>
  );
};
export default React.memo(UserHeader);

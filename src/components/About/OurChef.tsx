import React, { useState } from 'react';
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Modal } from '../Modal';
import SectionHeading from '../SectionHeading';
import ChefDetailComponent from './ChefDetailComponent';

interface Chef {
  id: string;
  name: string;
  position: string;
  description: string;
  thumnailUrl: string;
  address: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
    phone?: string;
  };
}
const Chefs: Array<Chef> = [
  {
    id: '1',
    name: 'John Doe',
    position: 'Master Chef',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    thumnailUrl: '1.jpg',
    address: 'HaNoi, VietNam',
    socials: {
      facebook: 'https://www.facebook.com',
      instagram: 'https://www.facebook.com',
      twitter: 'https://www.facebook.com',
      youtube: 'https://www.facebook.com',
      phone: '',
      email: '',
    },
  },
  {
    id: '2',
    name: 'James Bolt',
    position: 'Master Chef',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    thumnailUrl: '2.jpg',
    address: 'HaNoi, VietNam',
    socials: {
      facebook: 'https://www.facebook.com',
      instagram: 'https://www.facebook.com',
      twitter: 'https://www.facebook.com',
      youtube: 'https://www.facebook.com',
      phone: '',
      email: '',
    },
  },
  {
    id: '3',
    name: 'Paul Trueman',
    position: 'Master Chef',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    thumnailUrl: '3.jpg',
    address: 'HaNoi, VietNam',
    socials: {
      facebook: 'https://www.facebook.com',
      instagram: 'https://www.facebook.com',
      twitter: 'https://www.facebook.com',
      youtube: 'https://www.facebook.com',
      phone: '',
      email: '',
    },
  },
  {
    id: '4',
    name: 'Oscar Oldman',
    position: 'Asistant Chef',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    thumnailUrl: '4.jpg',
    address: 'HaNoi, VietNam',
    socials: {
      facebook: 'https://www.facebook.com',
      instagram: 'https://www.facebook.com',
      twitter: 'https://www.facebook.com',
      youtube: 'https://www.facebook.com',
      phone: '',
      email: '',
    },
  },
];
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  rows: 2,
  nextArrow: <FontAwesomeIcon icon={faLongArrowAltRight} size="sm" />,
  prevArrow: <FontAwesomeIcon icon={faLongArrowAltLeft} size="sm" />,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        // centerMode: true,
        slidesPerRow: 1,
      },
    },
  ],
};
const OurChefWrapper = styled.div`
  .slick-dots {
    bottom: -45px !important;
    li {
      width: auto;
      height: auto;
      margin: 8px;
      background: transparent;
      button {
        background: #ffff !important;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        &:before {
          display: none;
        }
      }
      &.slick-active {
        border: none;
        button {
          width: 15px;
          height: 15px;
          background: var(--color-green) !important;
        }
      }
    }
  }
  .slick-prev {
    left: -40px;
    z-index: 2;
  }
  .slick-next {
    right: -40px;
    z-index: 2;
  }
  .slick-disabled {
    path {
      fill: #d8d5d575 !important;
    }
    cursor: not-allowed !important;
  }
  @media screen and (max-width: 992px) {
    .slick-prev {
      left: -30px;
    }
    .slick-next {
      right: -30px;
    }
  }
  @media screen and (max-width: 680px) {
    .slick-prev {
      left: 0px;
    }
    .slick-next {
      right: 0px;
    }
  }
`;
const ChefWrapper = styled.div`
  min-height: 340px;
  svg {
    overflow: visible !important;
    height: 18px;
  }
  .socials svg {
    height: 13px;
  }
  &:hover {
    box-shadow: 1px 1px 10px var(--color-yellow);
  }
  .socials {
    a:hover {
      path {
        fill: var(--color-yellow) !important;
      }
    }
  }
  @media screen and (max-width: 680px) {
    min-height: 300px;
  }
`;

const ChefComponent = ({ chef }: { chef: Chef }) => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images/chefs`;
  return (
    <ChefWrapper className="border border-yellow p-4 sm:p-8 rounded-lg m-5 cursor-pointer transition-all">
      <div className="flex justify-between mb-6">
        <img
          src={`${ImgBaseUrl}/${chef.thumnailUrl}`}
          className="w-2/5 rounded-full h-24 w-24 object-cover object-center cursor-pointer"
        />
        <div className="w-3/5 pl-6 ">
          <h3 className="font-medium text-xl cursor-pointer text-yellow">
            {chef.name}
          </h3>
          <span className="text-sm text-gray-400 italic text-green">
            {chef.position}
          </span>
          <div className="flex mt-3 py-2 socials">
            <a
              className="flex items-center justify-start pr-3 cursor-pointer"
              href="mailto:dothuy302000@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="xs" />
            </a>
            <a
              className="flex items-center justify-start pr-3 cursor-pointer"
              href="mailto:dothuy302000@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="xs" />
            </a>
            <a
              className="flex items-center justify-start pr-3 cursor-pointer"
              href="mailto:dothuy302000@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="xs" />
            </a>
            <a
              className="flex items-center justify-start pr-3 cursor-pointer"
              href="mailto:dothuy302000@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} size="xs" />
            </a>
          </div>
        </div>
      </div>
      <ul>
        <li className="">
          <a className="flex items-center justify-start py-2 text-mb">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="xs" />
            <span className="pl-2">Hanoi, VietNam</span>
          </a>
        </li>
        <li className="">
          <a className="flex items-center justify-start py-2 text-mb">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              size="xs"
              transform={{ rotate: -42 }}
            />
            <span className="pl-2">+0977002602</span>
          </a>
        </li>
        <li className="">
          <a className="flex items-center justify-start py-2 text-mb">
            <FontAwesomeIcon icon={faEnvelope} size="xs" />

            <span className="pl-2">dothuy302000@gmail.com</span>
          </a>
        </li>
      </ul>
    </ChefWrapper>
  );
};

const OurChef = () => {
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
  const [chefCurrent, setChefCurrent] = useState<Chef>();
  function showChefDetail(chefDetail: Chef) {
    setIsShowDetail(true);
    setChefCurrent(chefDetail);
  }
  return (
    <OurChefWrapper>
      <SectionHeading title="Who Cook for you" note="Our Professional Chefs" />
      <div className="sm:w-11/12 md:w-4/5 mx-auto px-3 sm:px-4">
        <Slider {...settings}>
          {[...Chefs, ...Chefs].map((chef, id) => {
            return (
              <div key={id} onClick={() => showChefDetail(chef)}>
                <ChefComponent chef={chef} />
              </div>
            );
          })}
        </Slider>
      </div>
      {isShowDetail && (
        <Modal handleOpen={setIsShowDetail} isOpen={isShowDetail}>
          <ChefDetailComponent chef={chefCurrent} />
        </Modal>
      )}
    </OurChefWrapper>
  );
};

export default OurChef;

import React from 'react';
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import styled from 'styled-components';

interface SlideProps {
  links: Array<{ href: string; label: string }>;
  mainSlogant: string;
  subSlogant: string;
  imgUrl: string;
}
const HomeBannerWrapper = styled.div`
  /* img {
    max-height: 75vh;
  } */
  h3 span {
    color: var(--color-red);
    font-weight: bold;
  }
  .slick-slider {
    .slick-slide {
      padding-bottom: 1.5rem;
    }
    .slick-dots {
      bottom: 25px !important;
      li {
        width: auto;
        height: auto;
        margin: 8px;
        padding: 2px;
        border-radius: 50%;
        border: 1.5px solid #ffff;
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
    .slick-next,
    .slick-prev {
      bottom: 8% !important;
      top: unset;
      z-index: 1;
      path {
        fill: var(--color-green) !important;
      }
    }
    .slick-next {
      right: 8% !important;
    }
    .slick-prev {
      left: 8% !important;
    }
  }
  @media screen and (max-width: 991px) {
    .m-h-650 {
      min-height: 650px;
    }
  }
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrow: true,
  nextArrow: <FontAwesomeIcon icon={faLongArrowAltRight} size="sm" />,
  prevArrow: <FontAwesomeIcon icon={faLongArrowAltLeft} size="sm" />,
};
const BannerList = [
  {
    mainSlogant:
      'We do not cook, we create <span className="text-red">your emotions!</span>',
    subSlogant:
      'Consectetur numquam poro nemo veniam eligendi rem adipisci quomodi. Consectetur numquam poro nemo veniam eligendi rem adipisci quomodi.',
    links: [
      {
        href: '/about',
        label: 'Read More',
      },
      {
        href: '/menu',
        label: 'See Menu',
      },
    ],
    imgUrl: '1.png',
  },
  {
    mainSlogant:
      'Order Tasty & Fresh Food <span className="text-red">anytime!</span>',
    subSlogant:
      'Just confirm your order and enjoy delicious fastest delivery. Consectetur numquam poro nemo veniam eligendi rem adipisci quomodi.',
    links: [
      {
        href: '/menu',
        label: 'Order Now',
      },
    ],
    imgUrl: '2.png',
  },
  {
    mainSlogant:
      'Come and enjoy <span className="text-red">amazing</span> space with <span className="text-green">enthusiastic</span> service and <span className="text-yellow">great</span> food!',
    subSlogant:
      'Consectetur numquam poro nemo veniam eligendi rem adipisci quomodi. Consectetur numquam poro nemo veniam eligendi rem adipisci quomodi.',
    links: [
      {
        href: '/booking',
        label: 'Book a Table',
      },
      {
        href: '/menu',
        label: 'See More',
      },
    ],
    imgUrl: '3.png',
  },
];
const Slide = ({ links, mainSlogant, subSlogant, imgUrl }: SlideProps) => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images/home`;
  return (
    <div className="m-h-650 sm:min-h-auto h-screen w-full bg-contain bg-no-repeat bg-right bg-center">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center md:w-11/12 xl:w-4/5 mx-auto px-3 sm:px-4 h-full pt-28 sm:pt-16">
        <div className="text-center sm:text-left p-4">
          <h3
            className="text-xl sm:text-3xl lg:text-4xl leading-8 sm:leading-10 sm:leading-11 lg:leading-12 font-semibold uppercase pb-4"
            dangerouslySetInnerHTML={{ __html: `${mainSlogant}` }}
          ></h3>
          <p className="text-15 sm:text-base leading-6">{subSlogant}</p>
          <div className="mt-8">
            {links.map((link, id) => {
              return (
                <Link href={link.href} key={id}>
                  <span
                    className={`inline-block cursor-pointer text-sm sm:text-base ${
                      id % 2 === 0
                        ? 'px-4 bg-green rounded-3xl py-2 shadow-green'
                        : 'mr-4 ml-8 pb-1 border-b text-yellow border-yellow'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="py-4 sm:my-0">
          <img
            src={`${ImgBaseUrl}/${imgUrl}`}
            className="object-contain w-4/6 sm:w-11/12 m-auto sm:pl-4"
          />
        </div>
      </div>
    </div>
  );
};
const HomeBanner = () => {
  return (
    <HomeBannerWrapper className="overflow-hidden">
      <Slider {...settings}>
        {BannerList.map((banner, id) => {
          return (
            <div key={id}>
              <Slide
                mainSlogant={banner.mainSlogant}
                subSlogant={banner.subSlogant}
                links={banner.links}
                imgUrl={banner.imgUrl}
              />
            </div>
          );
        })}
      </Slider>
    </HomeBannerWrapper>
  );
};
export default HomeBanner;

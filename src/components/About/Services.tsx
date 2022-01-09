import { useRouter } from 'next/router';
import Slider from 'react-slick';
import styled from 'styled-components';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};
const services = [
  {
    title: 'Delicious Food',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    imgUrl: 'hot-pot.png',
  },
  {
    title: 'Expert Chefs',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    imgUrl: 'chef.png',
  },
  {
    title: 'FASTEST DELIVERY',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    imgUrl: 'delivery.png',
  },
  {
    title: 'Great space with friendly staffs',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    imgUrl: 'waiter.png',
  },
  {
    title: 'ORIGINAL & PERFECT RECIPES',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    imgUrl: 'cooking.png',
  },
];

const Service = ({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images/services`;
  return (
    <div className="border border-yellow p-8 md:p-10 rounded-lg m-5 sm:m-3 md:m-5 min-h-400 xl:min-h-500 2xl:min-h-auto service-info">
      <div className="">
        <img src={`${ImgBaseUrl}/${imgUrl}`} className="mx-auto" />
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold uppercase text-center py-3 md:py-5 mt-4 text-red md:px-0 ">
          {title}
        </h3>
        <p className="text-mb md:text-base text-center description">
          {description}
        </p>
      </div>
    </div>
  );
};
const ServicesWrapper = styled.div`
  .slick-slide {
    padding: 1.5rem 0 !important;
  }
  .slick-dots {
    bottom: -25px !important;
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
  .service > div {
    transition: all 0.2s linear;
    transform: translateY(0px) !important;
    &:hover {
      background: var(--color-yellow) !important;
      transform: translateY(-20px) !important;
      transform-origin: top;
      transition: all 0.2s linear;
    }
  }
`;
const Services = () => {
  return (
    <ServicesWrapper className="md:w-11/12 xl:w-4/5 mx-auto">
      <ul className="flex-wrap justify-center items-center hidden sm:flex sm:m-3 md:m-0">
        {services.map((item, id) => {
          return (
            <li key={id} className="w-1/2 md:w-1/3 service bg-transparent">
              <Service {...item} />
            </li>
          );
        })}
      </ul>
      <Slider {...settings} className="block sm:hidden">
        {services.map((item, id) => {
          return (
            <div key={id} className="w-full">
              <Service {...item} />
            </div>
          );
        })}
      </Slider>
    </ServicesWrapper>
  );
};
export default Services;

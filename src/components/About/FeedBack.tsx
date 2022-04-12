import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faQuoteLeft,
  faQuoteRight,
  faStarHalfAlt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import styled from 'styled-components';
import SliderArrow from '../SliderArrow';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  // centerMode: true,
  arrows: true,
  nextArrow: <SliderArrow icon={faArrowAltCircleRight} />,
  prevArrow: <SliderArrow icon={faArrowAltCircleLeft} />,
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
      },
    },
  ],
};
const feedbacks = [
  {
    description: 'Lorem ipsum dolor sit amet, consectet unde omnis iste natus.',
    user: {
      name: 'Ford Laywer',
      thumnailUrl: '1.jpg',
    },
    rate: 5,
  },
  {
    description: 'Sed ut perspiciatis accusantium doloremque laudantium.',
    user: {
      name: 'James Gonse',
      thumnailUrl: '2.jpg',
    },
    rate: 4.5,
  },
  {
    description:
      'Excepteur sint occaecat cupidatat non proident mollit anim id est laborum.',
    user: {
      name: 'JosePhine',
      thumnailUrl: '3.jpg',
    },
    rate: 5,
  },
  {
    description:
      'Duis aute irure dolor in reprehenderit eu fugiat null apariatur.',
    user: {
      name: 'Hana Bold',
      thumnailUrl: '4.jpg',
    },
    rate: 5,
  },
  {
    description:
      'Nemo enim ipsam voluptatem quia aspernatur aut odit aut fugit.',
    user: {
      name: 'Tony Daniel',
      thumnailUrl: '5.jpg',
    },
    rate: 5,
  },
];
const FeedBackWrapper = styled.div`
  svg {
    height: 15px;
  }
  path {
    fill: var(--color-green);
  }
  .slick-list {
    padding-top: 3rem;
  }
  .slick-next,
  .slick-prev {
    top: 60% !important;
    height: 25px !important;
  }
  .slick-dots {
    bottom: -35px !important;
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
    left: -25px;
    z-index: 2;
  }
  .slick-next {
    right: -25px;
    z-index: 2;
  }
  .box-shadow {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  }
  .rating {
    path {
      /* fill: var(--color-yellow)!important; */
    }
  }
  .min-h-360 {
    min-height: 360px;
  }
  @media screen and (max-width: 992px) {
    .slick-prev {
      left: -15px;
    }
    .slick-next {
      right: -15px;
    }
  }
  @media screen and (max-width: 680px) {
    .slick-prev {
      left: -10px;
    }
    .slick-next {
      right: -10px;
    }
  }
`;

const FeedBackComponent = ({ feedback }: { feedback: any }) => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images/clients`;
  return (
    <div className="bg-white p-4 md:p-6 m-3 md:m-5 relative box-shadow feed-back min-h-360">
      <div className="rounded-full p-2 inline-block mx-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow">
        <img
          src={`${ImgBaseUrl}/${feedback?.user?.thumnailUrl}`}
          className="rounded-full w-24 h-24 object-cover box-shadow"
        />
      </div>
      <div className="mt-16">
        <div className="flex justify-center rating">
          {Array.from(Array(Math.trunc(feedback.rate)).keys()).map((_, id) => {
            return (
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                key={id}
                className="inline-block mr-1"
              />
            );
          })}
          {Math.trunc(feedback.rate) !== feedback.rate && (
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              size="sm"
              className="inline-block mr-1"
            />
          )}
        </div>
        <div className="pb-12 pt-6">
          <div>
            <FontAwesomeIcon icon={faQuoteLeft} size="sm" />
          </div>
          <h3 className="text-black text-center font-medium text-lg">
            {feedback?.user?.name}
          </h3>
          <p className="text-black text-mb m-3 text-center">
            {feedback?.description}
          </p>
          <div className="relative">
            <FontAwesomeIcon
              icon={faQuoteRight}
              size="sm"
              className="absolute right-0 top-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const FeedBack = () => {
  return (
    <FeedBackWrapper className="m-auto">
      <Slider {...settings}>
        {feedbacks.map((item, id) => {
          return (
            <div key={id}>
              <FeedBackComponent feedback={item} />
            </div>
          );
        })}
      </Slider>
    </FeedBackWrapper>
  );
};
export default FeedBack;

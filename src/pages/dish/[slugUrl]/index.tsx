import { useEffect, useState } from 'react';
import {
  faArrowLeft,
  faCartPlus,
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import styled from 'styled-components';
import SliderArrow from '../../../components/SliderArrow';
import { Meta } from '../../../layout/Meta';
import { Main } from '../../../templates/Main';

const settings = {
  arrows: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  nextArrow: <SliderArrow icon={faChevronRight} />,
  prevArrow: <SliderArrow icon={faChevronLeft} />,
};
const DishDetailWraper = styled.div`
  .rate svg {
    height: 15px !important;
    path {
      fill: var(--color-yellow) !important;
    }
  }
  svg.add {
    height: 18px;
    path {
      fill: #ffff !important;
    }
  }
  .slick-track {
    display: flex;
    align-items: center;

    /* max-height: 450px; */
  }
  .slide-big .slick-track {
    background: rgba(255, 255, 255, 0.3);
  }
  .slide-small .slick-slide.slick-current {
    opacity: 0.5;
  }
  .slick-arrow.slick-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .slick-prev {
    left: -15px !important;
  }
  .slick-next {
    right: -15px !important;
  }
  .add-btn:hover {
    background: transparent !important;
    transition: all 0.3s linear !important;
  }
  .decrement,
  .increment {
    &:hover {
      background: #f1f1f1d6 !important;
      transition: all 0.3s linear;
    }
  }
  .back:hover {
    margin-left: -20px;
    transition: all 0.3 linear;
  }
`;
const DishDetail = () => {
  const [SmallImgRef, setSmallImgRef] = useState<any>();
  const [BigImgRef, setBigImgRef] = useState<any>();
  const [count, setCount] = useState<number>(1);
  const [total, setTotal] = useState<number>(85.3);
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images/dishes`;
  const listImg = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleBack = () => {
    router.back();
  };
  useEffect(() => {
    setTotal(count * 85.3);
  }, [count]);
  return (
    <Main
      meta={
        <Meta
          title="FugGud"
          description="This is food website, restaurant website. "
        />
      }
    >
      <DishDetailWraper className="pt-24 sm:pt-28 md:pt-36 pb-20">
        <div className="flex justify-between flex-wrap my-20 md:w-11/12 xl:w-4/5 mx-auto px-5">
          <div className="w-full sm:w-2/3 sm:pr-6 lg:pr-12">
            <div
              className="flex items-center justify-start cursor-pointer mb-6 back transition-all"
              onClick={handleBack}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                size="xs"
                className="h-6 inline-block"
              />
              <span className="text-white ml-4 text-lg font-medium">Back</span>
            </div>
            <div>
              <Slider
                {...settings}
                asNavFor={SmallImgRef}
                ref={(slider) => setBigImgRef(slider)}
                className="slide-big"
              >
                {listImg.map((img, id) => {
                  return (
                    <div key={id} className="flex items-center">
                      <img
                        src={`${ImgBaseUrl}/${img}`}
                        className="object-contain mx-auto p-2"
                      />
                    </div>
                  );
                })}
              </Slider>
              <Slider
                {...settings}
                asNavFor={BigImgRef}
                ref={(slider) => setSmallImgRef(slider)}
                slidesToShow={3}
                arrows={true}
                swipeToSlide={true}
                focusOnSelect={true}
                className="my-6 slide-small"
              >
                {listImg.map((img, id) => {
                  return (
                    <div key={id}>
                      <img
                        src={`${ImgBaseUrl}/${img}`}
                        className="p-4 object-cover"
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div>
              <h3 className="font-semibold text-xl border-b border-white pb-2">
                Description
              </h3>
              <div className="mt-4">Lorem ipsum dolor</div>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className="font-bold text-2xl lg:text-3xl text-red">
              Name dishes
            </h3>
            <div className="rate mt-2">
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                className="inline-block mr-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                className="inline-block mr-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                className="inline-block mr-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                className="inline-block mr-1"
              />
              <span className="inline-block ml-2 text-gray-200 text-sm">
                100
              </span>
            </div>
            <div className="mt-4">
              <span className="text-mb font-medium text-green">
                Ingredients:
              </span>
              <span className="text-mb ml-2 italic">fish, salad, rice....</span>
            </div>
            <h4 className="font-semibold text-2xl mt-8">$85.30</h4>
            <div className="flex justify-center my-4">
              <button
                className="inline-block w-1/3 py-3 px-4 bg-gray-200 text-black cursor-pointer font-medium decrement"
                onClick={decrease}
              >
                -
              </button>
              <span className="inline-block w-1/3 py-3 px-4 bg-white border border-gray-300 text-black text-center text-lg font-medium">
                {count}
              </span>
              <button
                className="inline-block w-1/3 py-3 px-4 bg-gray-200 text-black cursor-pointer font-medium increment"
                onClick={increase}
              >
                +
              </button>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-semibold text-base">Subtotal</span>
              <span className="font-semibold text-base">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-center items-center mx-auto bg-green my-3 cursor-pointer py-3 px-3 border border-green add-btn">
              <span className="text-white font-medium text-mb">
                Add to cart
              </span>
              <FontAwesomeIcon
                icon={faCartPlus}
                size="xs"
                className="add cursor-pointer ml-2"
              />
            </div>
          </div>
        </div>
      </DishDetailWraper>
    </Main>
  );
};
export default DishDetail;

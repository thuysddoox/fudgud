import { useState } from 'react';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Dish } from '../../utils/interfaces';
import Menu from '../Menu';
import SliderArrow from '../SliderArrow';

const settings = {
  arrows: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  nextArrow: <SliderArrow icon={faArrowAltCircleRight} />,
  prevArrow: <SliderArrow icon={faArrowAltCircleLeft} />,
};
const OurMenuWrapper = styled.div`
  svg {
    height: 40px;
    width: 40px;
  }
  path {
    fill: var(--color-green);
  }
  .slick-arrow.slick-disabled {
    display: none !important;
  }
  .slick-next {
    right: 0px !important;
    z-index: 1;
  }
  .slick-prev {
    left: 0px !important;
    z-index: 1;
  }
  @media screen and (max-width: 768px) {
    svg {
      height: 30px;
      width: 30px;
    }
  }
`;
const OurMenu = ({ menus }: { menus: Array<Array<Dish>> }) => {
  const [TabNavRef, setTabNavRef] = useState<any>();
  const [MenuNavRef, setMenuNavRef] = useState<any>();
  return (
    <OurMenuWrapper className="md:w-11/12 xl:w-4/5 mx-auto px-3 sm:px-4 mb-24">
      <Slider
        {...settings}
        arrows={true}
        swipeToSlide={true}
        focusOnSelect={true}
        className="my-6"
        ref={(slider) => setTabNavRef(slider)}
        asNavFor={MenuNavRef}
      >
        {['Main Dishes', 'Dessert', 'Ancols', 'NonAncolholic'].map(
          (item, id) => {
            return (
              <div key={id}>
                <h3 className="text-center font-semibold text-2xl uppercase text-red p-4">
                  {item}
                </h3>
              </div>
            );
          }
        )}
      </Slider>
      <Slider
        {...settings}
        ref={(slider) => setMenuNavRef(slider)}
        asNavFor={TabNavRef}
      >
        {menus.map((menu, id) => {
          return (
            <div key={id}>
              <Menu dishes={menu} />
            </div>
          );
        })}
      </Slider>
    </OurMenuWrapper>
  );
};
export default OurMenu;

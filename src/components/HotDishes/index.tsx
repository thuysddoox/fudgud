import { useRouter } from 'next/router';
import Slider from 'react-slick';
import SimpleBar from 'simplebar-react';
import styled from 'styled-components';
import { Dish } from '../../utils/interfaces';
import DishComponent from '../Dish';

// interface HotDishes {
//   NonAlcoholic: Array<Dish>;
//   Ancols: Array<Dish>;
//   MainDishes: Array<Dish>;
//   Desserts: Array<Dish>;
// }
const hotDishes = {
  MainDishes: [
    {
      id: 1,
      name: 'Shushi',
      cost: 110,
      thumnailUrl: '',
      intro: 'Lorem ipsum',
      description: 'Lorem ipsum',
      ingredients: 'Lorem ipsum',
      timeCooking: '2h',
      kind: 2,
    },
    {
      id: 1,
      name: 'Shushi',
      cost: 110,
      thumnailUrl: '',
      intro: 'Lorem ipsum',
      description: 'Lorem ipsum',
      ingredients: 'Lorem ipsum',
      timeCooking: '2h',
      kind: 2,
    },
    {
      id: 1,
      name: 'Shushi',
      cost: 110,
      thumnailUrl: '',
      intro: 'Lorem ipsum',
      description: 'Lorem ipsum',
      ingredients: 'Lorem ipsum',
      timeCooking: '2h',
      kind: 2,
    },
    {
      id: 1,
      name: 'Shushi',
      cost: 110,
      thumnailUrl: '',
      intro: 'Lorem ipsum',
      description: 'Lorem ipsum',
      ingredients: 'Lorem ipsum',
      timeCooking: '2h',
      kind: 2,
    },
  ],
  NonAlcoholic: [
    {
      id: 1,
      name: 'Shushi',
      cost: 110,
      thumnailUrl: '',
      intro: 'Lorem ipsum',
      description: 'Lorem ipsum',
      ingredients: 'Lorem ipsum',
      timeCooking: '2h',
      kind: 2,
    },
  ],
  Ancols: [
    {
      id: 1,
      name: 'Shushi',
      cost: 110,
      thumnailUrl: '',
      intro: 'Lorem ipsum',
      description: 'Lorem ipsum',
      ingredients: 'Lorem ipsum',
      timeCooking: '2h',
      kind: 2,
    },
  ],
  Desserts: [
    {
      id: 1,
      name: 'Shushi',
      cost: 110,
      thumnailUrl: '',
      intro: 'Lorem ipsum',
      description: 'Lorem ipsum',
      ingredients: 'Lorem ipsum',
      timeCooking: '2h',
      kind: 2,
    },
  ],
};
const ListHotDishesWrapper = styled.div``;
const HotDishesWrapper = styled.div`
  .slick-dots {
    top: -100px !important;
    li {
      a {
        background: var(--color-yellow);
        padding: 0.5rem 1.5rem 0.5rem 1rem !important;
      }
      &.slick-active a {
        background: var(--color-green);
      }
    }
    .slick-slide {
      padding: 1rem !important;
    }
  }

  .slick-list {
    z-index: 1;
  }
  .simplebar-scrollbar:before {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
  @media screen and (max-width: 768px) {
    .slick-dots {
      .slick-slide {
        padding: 0.5rem !important;
      }
    }
  }
`;
const ListHotDishes = ({ dishes }: { dishes: Array<Dish> }) => {
  return (
    <ListHotDishesWrapper>
      <SimpleBar
        style={{ maxHeight: '800px' }}
        forceVisible="y"
        autoHide={false}
      >
        <ul className="">
          {dishes.map((dish, id) => {
            return (
              <li key={id} className="w-full sm:w-1/2 inline-block">
                <DishComponent dish={dish} />
              </li>
            );
          })}
        </ul>
      </SimpleBar>
    </ListHotDishesWrapper>
  );
};
const HotDishesComponent = () => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images/icons`;
  const tabList = [
    {
      title: 'MainDishes',
      icon: `${ImgBaseUrl}/main.png`,
    },
    {
      title: 'Desserts',
      icon: `${ImgBaseUrl}/desserts.png`,
    },
    {
      title: 'NonAlcoholic',
      icon: `${ImgBaseUrl}/drinks.png`,
    },
    {
      title: 'Ancols',
      icon: `${ImgBaseUrl}/ancols.png`,
    },
  ];
  return (
    <HotDishesWrapper className="pt-24 md:w-11/12 xl:w-4/5 mx-auto px-3 sm:px-4 mb-24">
      <Slider
        {...{
          dots: true,
          dotsClass: 'slick-dots slick-thumb',
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
          customPaging(i: any) {
            return (
              <a className="flex items-center justify-center cursor-pointer">
                {tabList[i]?.icon && (
                  <img src={tabList[i]?.icon} className="h-10" />
                )}
                <h3 className="text-lg font-medium uppercase text-white ml-3">
                  {tabList[i]?.title}
                </h3>
              </a>
            );
          },
          appendDots: (dots) => (
            <div className="tablist">
              <Slider
                slidesToShow={4}
                slidesToScroll={1}
                arrows={false}
                dots={false}
                infinite={false}
                responsive={[
                  {
                    breakpoint: 950,
                    settings: {
                      slidesToShow: 3,
                      centerMode: true,
                      infinite: true,
                    },
                  },
                  {
                    breakpoint: 850,
                    settings: {
                      slidesToShow: 2,
                      centerMode: true,
                      infinite: true,
                    },
                  },
                  {
                    breakpoint: 575,
                    settings: {
                      slidesToShow: 1,
                      centerMode: true,
                      infinite: true,
                    },
                  },
                ]}
              >
                {dots}
              </Slider>
            </div>
          ),
        }}
      >
        {Object.entries(hotDishes).map(([key, value]) => {
          return (
            <div key={key} className="my-3">
              <ListHotDishes dishes={value} />
            </div>
          );
        })}
      </Slider>
    </HotDishesWrapper>
  );
};
export default HotDishesComponent;

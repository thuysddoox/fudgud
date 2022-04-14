import {
  faStopwatch,
  faCartPlus,
  faStar,
  faConciergeBell,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Dish } from '../../utils/interfaces';

const DishComponentWrapper = styled.div`
  svg {
    height: 15px;
    path {
      fill: var(--color-yellow);
    }
  }
  .rate svg {
    height: 10px !important;
  }
  svg.add {
    height: 18px;
    path {
      fill: #ffff !important;
    }
  }
  .intro {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    .mb-flex-col {
      flex-direction: column !important;
    }
    .mb-w-full {
      width: 100% !important;
    }
  }
`;
const DishComponent = ({ dish }: { dish: Dish }) => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images/dishes`;
  return (
    <Link href={`${router.pathname}/dish/1`} passHref>
      <DishComponentWrapper className="bg-gray rounded-lg mx-3 mb-5 sm:m-3 md:m-4 overflow-hidden dish-item shadow-header">
        <div className="flex mb-flex-col flex-row justify-start items-start bg-white">
          <div className="mb-w-full w-2/5 self-center ">
            <img
              src={`${ImgBaseUrl}/1.jpg`}
              className="object-cover h-48 sm:h-40 md:h-48 mx-auto"
            />
          </div>
          <div className="mb-w-full w-3/5 p-3 bg-white">
            <div className="flex justify-between items-center">
              <h3 className="text-black font-semibold text-base">
                {dish?.name}
              </h3>
              <span className="text-black font-semibold text-base">
                ${dish?.cost.toFixed(2)}
              </span>
            </div>

            <div className="rate">
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
              <span className="inline-block ml-2 text-black text-sm">100</span>
            </div>
            <div className="border-dashed border-yellow border-t-2 mt-2">
              <div className="flex justify-between items-center my-3">
                <div className="text-black flex text-sm justify-start items-center">
                  <FontAwesomeIcon
                    icon={faStopwatch}
                    size="xs"
                    className="inline-block"
                  />
                  <span className="text-black mx-2">2h</span>{' '}
                </div>
                <div className="text-black flex text-sm justify-start items-center">
                  <FontAwesomeIcon
                    icon={faConciergeBell}
                    size="xs"
                    className="inline-block"
                  />
                  <span className="text-black mx-2">4 servings</span>{' '}
                </div>
              </div>
              <p className="text-black text-sm intro">{dish?.intro}</p>
              <div className="inline-flex justify-center items-center mx-auto bg-green my-3 cursor-pointer py-2 px-3">
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
        </div>
      </DishComponentWrapper>
    </Link>
  );
};
export default DishComponent;

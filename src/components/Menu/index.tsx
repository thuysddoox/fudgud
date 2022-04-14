import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Dish } from '../../utils/interfaces';

const MenuWrapper = styled.div`
  .intro {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
const Menu = ({ dishes }: { dishes: Array<Dish> }) => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images/dishes`;
  return (
    <MenuWrapper>
      <ul className="flex flex-wrap justify-between m-2">
        {dishes.map((dish, id) => {
          return (
            <Link href={`${router.pathname}/slug`} as="" key={id}>
              <div className="flex justify-center md:justify-start items-center w-full md:w-1/2 my-4 sm:px-4 cursor-pointer">
                <img
                  src={`${ImgBaseUrl}/${dish.thumnailUrl}`}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover object-center"
                />
                <div className="pl-4">
                  <div className="flex pb-1">
                    <h3 className="font-medium">{dish?.name}</h3>
                    <p className="border-b-2 border-yellow border-dashed w-1/5 flex-1 h-5 mx-2"></p>
                    <span className="inline-block pl-1 font-medium text-yellow">
                      ${dish?.cost.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-mb intro">{dish?.intro}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </MenuWrapper>
  );
};
export default Menu;

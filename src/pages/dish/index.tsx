import { useState } from 'react';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '../../components/Menu';
import SectionHeading from '../../components/SectionHeading';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const menus = {
  main: [
    {
      id: 1,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
    {
      id: 2,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
    {
      id: 3,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
  ],
  desserts: [
    {
      id: 1,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
    {
      id: 2,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
    {
      id: 3,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
  ],
  Ancols: [
    {
      id: 1,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
    {
      id: 2,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
    {
      id: 3,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
  ],
  NonAncolholic: [
    {
      id: 1,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
    {
      id: 2,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
    {
      id: 3,
      name: 'Shushi',
      cost: 20,
      thumnailUrl: '1.jpg',
      intro: 'A small river named Duden flows by their place and supplies',
      description: '',
      ingredients: '',
      timeCooking: '',
      kind: 1,
    },
  ],
};
const DishesMenus = () => {
  const [isCollapsed, setIsCollapsed] = useState({
    main: false,
    desserts: false,
    Ancols: false,
    NonAncolholic: false,
  });
  const handleCollapse = (kind: any) => {
    setIsCollapsed({
      ...isCollapsed,
      [kind]: !isCollapsed[kind as keyof typeof isCollapsed],
    });
  };
  return (
    <Main
      meta={
        <Meta
          title="FugGud"
          description="This is food website, restaurant website. "
        />
      }
    >
      <div className="pt-24 sm:pt-28 md:pt-36 pb-20">
        {Object.keys(menus).map((key: any) => {
          return (
            <div className="" key={key}>
              <SectionHeading title={key} />
              <FontAwesomeIcon
                icon={
                  !isCollapsed[key as keyof typeof isCollapsed]
                    ? faChevronUp
                    : faChevronDown
                }
                size="xs"
                className="h-6 mx-auto cursor-pointer"
                onClick={() => handleCollapse(key)}
              />
              <div
                className={`mx-auto md:w-11/12 xl:w-4/5 mx-auto px-5 overflow-hidden transition-all duration-300 ${
                  isCollapsed[key as keyof typeof isCollapsed]
                    ? 'h-0'
                    : 'h-auto mt-12'
                }`}
              >
                <Menu dishes={menus[key as keyof typeof menus]} />
              </div>
            </div>
          );
        })}
      </div>
    </Main>
  );
};
export default DishesMenus;

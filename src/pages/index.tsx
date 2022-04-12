import styled from 'styled-components';
import Achievement from '../components/About/Achievement';
import DownloadApp from '../components/About/DownloadApp';
import OurSpace from '../components/About/OurSpace';
import Services from '../components/About/Services';
import HomeBanner from '../components/Banner/Home';
import OurMenu from '../components/Home/OurMenu';
import HotDishes from '../components/HotDishes';
import SectionHeading from '../components/SectionHeading';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const menus = [
  [
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
  [
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
  [
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
  [
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
];
const HomePageWrapper = styled.div`
  .service-info {
    min-height: 300px !important;
    .description {
      display: none;
    }
  }
  @media screen and (min-width: 1480px) {
    .service-info {
      min-height: 330px !important;
    }
  }
`;
const Index = () => {
  // const router = useRouter();
  return (
    <Main
      meta={
        <Meta
          title="FugGud"
          description="This is food website, restaurant website"
        />
      }
    >
      <HomePageWrapper>
        <HomeBanner />
        <div className="my-24">
          <OurSpace />
          <div>
            <SectionHeading title="Hot Dishes" note="Best Sellers" />
            <HotDishes />
          </div>
          <div>
            <SectionHeading title="Our Menu" note="Order Right Now" />
            <OurMenu menus={menus} />
          </div>
          <div>
            <SectionHeading title="Why Choose Us" note="Best Choice" />
            <Services />
            <Achievement />
            <DownloadApp />
          </div>
        </div>
      </HomePageWrapper>
    </Main>
  );
};

export default Index;

import styled from 'styled-components';
import Achievement from '../components/About/Achievement';
import Services from '../components/About/Services';
import HomeBanner from '../components/Banner/Home';
import SectionHeading from '../components/SectionHeading';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

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
          <div>
            <SectionHeading title="Why Choose Us" note="Best Choice" />
            <Services />
            <Achievement />
          </div>
          <div>
            <SectionHeading title="Hot Dishes" note="Best Sellers" />
          </div>
        </div>
      </HomePageWrapper>
    </Main>
  );
};

export default Index;

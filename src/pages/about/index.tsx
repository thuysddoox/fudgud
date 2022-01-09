import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Achievement from '../../components/About/Achievement';
import ContactInformation from '../../components/About/ContactInformation';
import OurChef from '../../components/About/OurChef';
import OurStory from '../../components/About/OurStory';
import Services from '../../components/About/Services';
import SectionHeading from '../../components/SectionHeading';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const AboutPageWrapper = styled.div`
  .intro {
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    p {
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }
  }
  .min-h-350 {
    min-height: 350px;
  }
  @media screen and (max-width: 768px) {
    .mb-w-full {
      width: 100% !important;
    }
    .mb-block {
      display: block;
    }
  }
`;

const AboutPage = () => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images`;
  return (
    <Main
      meta={
        <Meta
          title="FugGud"
          description="This is food website, restaurant website. "
        />
      }
    >
      <AboutPageWrapper className="pt-48 pb-20">
        <ContactInformation />
        <div className="relative flex mb-block">
          <div className="mb-w-full w-1/2">
            <img
              src={`${ImgBaseUrl}/restaurant/1.jpg`}
              className="w-full min-h-350 object-cover"
            />
          </div>
          <div className="mb-w-full w-1/2">
            <img
              src={`${ImgBaseUrl}/restaurant/3.jpg`}
              className="w-full min-h-350 object-cover"
            />
          </div>
          <div className="mb-w-full w-2/3 md:w-1/2 intro absolute top-1/2 md:top-0 left-1/2 -translate-x-2/4 md:translate-x-0 -translate-y-2/4 md:translate-y-0 p-6 pb-10 md:px-10 md:py-12 md:pb-20">
            <h3 className="font-semibold text-center text-xl sm:text-2xl lg:text-3xl mb-4">
              Welcome to{' '}
              <span className="font-bold text-red">FudGud Restaurant</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              fuga recusandae quidem. Quaerat molestiae blanditiis doloremque
              possimus labore voluptatibus distinctio recusandae autem esse
              explicabo molestias officia placeat, accusamus aut saepe.
            </p>
          </div>
        </div>
        <OurStory />
        <div>
          <SectionHeading title="What we have" note="Choose us" />
          <Services />
        </div>
        <Achievement />
        <OurChef />
      </AboutPageWrapper>
    </Main>
  );
};
export default AboutPage;

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ContactInformation from '../../components/About/ContactInformation';
import Form from '../../components/Form';
import Booking from '../../components/Form/booking';
import SectionHeading from '../../components/SectionHeading';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";

const ContactWrapper = styled.div`
  .slick-dots {
    top: 10px !important;
    bottom: unset !important;
    li {
      width: auto !important;
      height: auto !important;
      &.slick-active h3 {
        color: var(--color-green) !important;
        border-bottom: 5px solid var(--color-green) !important;
      }
    }
  }
  .slick-list {
    /* z-index: 2 !important; */
    .slick-slide {
      padding: 1rem !important;
      position: static !important;
      display: none !important;
      &.slick-current {
        display: block !important;
      }
    }
  }
`;
const ContactPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="FugGud"
          description="This is food website, restaurant website. "
        />
      }
    >
      <ContactWrapper className="pt-24 sm:pt-28 md:pt-36 pb-20">
        <ContactInformation />
        <SectionHeading title="Contact for advice and support" />
        <div className="md:w-11/12 xl:w-4/5 mx-auto px-3 sm:px-4">
          <p className="text-mb sm:text-base text-center text-white w-2/3 mx-auto p-6 leading-7">
            Please fill in the contact information, FugGud will contact and
            answer your questions as soon as possible.
          </p>
          <Slider
            {...{
              dots: true,
              dotsClass: 'slick-dots slick-thumb',
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              fade: true,
              arrows: false,
              customPaging(i: any) {
                return (
                  <h3 className="font-bold text-lg uppercase inline-block py-3 m-4 text-yellow">
                    {i % 2 !== 0 ? 'Book' : 'Write'}
                  </h3>
                );
              },
              appendDots: (dots) => <div>{dots}</div>,
            }}
            className="pt-32"
          >
            <Form />
            <Booking />
          </Slider>
        </div>
      </ContactWrapper>
    </Main>
  );
};

export default ContactPage;

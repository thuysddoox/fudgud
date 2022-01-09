import React from 'react';
import styled from 'styled-components';
import ContactInformation from '../../components/About/ContactInformation';
import Form from '../../components/Form';
import SectionHeading from '../../components/SectionHeading';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";

const AboutWrapper = styled.div``;
const AboutPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="FugGud"
          description="This is food website, restaurant website. "
        />
      }
    >
      <AboutWrapper className="pt-48 pb-20">
        <ContactInformation />
        <SectionHeading title="Contact for advice and support" />
        <div className="md:w-11/12 xl:w-4/5 mx-auto px-3 sm:px-4">
          <p className="text-mb sm:text-base text-center text-white w-2/3 mx-auto p-6 leading-7">
            Please fill in the contact information, FugGud will contact and
            answer your questions as soon as possible.
          </p>
          {/* <div>
              <ul>
                <li className="my-6 ml-6">
                  <h3 className="inline-block pr-2 font-medium">Address:</h3>
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/cdQja1MZ3RP9N9u58">
                    <span className="text-yellow">Hanoi, Vietnam</span>
                  </a>
                </li>
                <li className="my-6 ml-6">
                  <h3 className="inline-block pr-2 font-medium">Phone: </h3>
                  <a target="_blank" href="tel:0977002602">
                    <span className="text-yellow">0977002602</span>
                  </a>
                </li>
                <li className="my-6 ml-6">
                  <h3 className="inline-block pr-2 font-medium">Email: </h3>
                  <a target="_blank" href="mailto:dothuy302000@gmail.com">
                    <span className="text-yellow">dothuy302000@gmail.com</span>
                  </a>
                </li>
                <li className="my-6 ml-6">
                  <h3 className="inline-block pr-2 font-medium">Website: </h3>
                  <a target="_blank" href=""></a>
                  <span className="text-yellow"></span>
                </li>
              </ul>
            </div> */}
          <Form />
        </div>
      </AboutWrapper>
    </Main>
  );
};

export default AboutPage;

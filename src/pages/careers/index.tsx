import React from 'react';
import OurChef from '../../components/About/OurChef';
import Form from '../../components/Form';
import JobItem from '../../components/Job';
import SectionHeading from '../../components/SectionHeading';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const Careers = () => {
  return (
    <Main
      meta={
        <Meta
          title="FugGud"
          description="This is food website, restaurant website"
        />
      }
    >
      <div className="pt-24 sm:pt-28 md:pt-36 pb-20">
        <div className="my-20 md:w-11/12 xl:w-4/5 mx-auto px-5">
          <JobItem />
        </div>
        <div>
          <OurChef title="Who work with you" />
        </div>
        <div>
          <SectionHeading title="SUBMIT YOUR APPLICATION NOW" />
          <Form hasFile={true} />
        </div>
      </div>
    </Main>
  );
};

export default Careers;

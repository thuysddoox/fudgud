import React from 'react';
import styled from 'styled-components';

const SectionHeadingWrap = styled.div`
  .line {
    height: 2px;
    &:after {
      position: absolute;
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid var(--color-green);
    }
    &:first-child {
      &:after {
        right: 0%;
        transform: translate(100%, -50%);
      }
    }
    &:last-child {
      &:after {
        left: 0%;
        transform: translate(-100%, -50%);
      }
    }
  }
`;
const SectionHeading = ({ title, note }: { title: string; note?: string }) => {
  return (
    <SectionHeadingWrap>
      <div className="flex items-center justify-between my-10 md:my-12 lg:my-14">
        <span className="line block w-8 sm:w-1/5 md:w-1/4 lg:w-1/3 bg-white relative"></span>
        <div className="px-4">
          <h3 className="font-semibold uppercase text-xl sm:text-2xl lg:text-3xl text-yellow relative text-center">
            {title}
          </h3>
          <p className="text-center">{note}</p>
        </div>
        <span className="line block w-8 sm:w-1/5 md:w-1/4 lg:w-1/3 bg-white relative"></span>
      </div>
    </SectionHeadingWrap>
  );
};
export default SectionHeading;

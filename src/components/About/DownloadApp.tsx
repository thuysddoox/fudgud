import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import SectionHeading from '../SectionHeading';

const DownloadAppWrapper = styled.div``;
const DownloadApp = () => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images`;
  return (
    <>
      <SectionHeading
        title="we have convenience"
        note="Order anytime and anywhere"
      />
      <DownloadAppWrapper className="my-20 md:w-11/12 xl:w-4/5 mx-auto px-5">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2 sm:p-4 text-center sm:text-left">
            <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-red uppercase">
              Download Our Mobile App
            </h3>
            <p className="py-4 leading-7">
              Repellat, dolorem a. Qui ipsam quos, obcaecati mollitia
              consectetur ad vero minus neque sit architecto totam distineserunt
              pariatur adipisci rem aspernatur illum ex!
            </p>
            <div className="flex justify-center sm:justify-start items-center my-6">
              <Link href="https://www.apple.com/app-store/">
                <img
                  src={`${ImgBaseUrl}/download1.svg`}
                  className="mr-5 cursor-pointer"
                />
              </Link>
              <Link href="https://play.google.com/store">
                <img
                  src={`${ImgBaseUrl}/download2.svg`}
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="mt-14 sm:mt-0 w-full sm:w-1/2">
            <img src={`${ImgBaseUrl}/phones.png`} className="object-contain" />
          </div>
        </div>
      </DownloadAppWrapper>
    </>
  );
};
export default DownloadApp;

import React, { useState } from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import { Modal } from '../Modal';
import SectionHeading from '../SectionHeading';

const Zoom = keyframes`
  from{
    transform: scale(1);
  }
  to{
    transform: scale(1.5);
  }
`;
const OurSpaceWrapper = styled.div`
  svg {
    height: 25px !important;
    path {
      fill: var(--color-yellow);
    }
  }
  .scale {
    animation: ${Zoom} 10s infinite ease-in-out alternate;
  }
  button:hover {
    box-shadow: 1px 1px 10px var(--color-green);
  }
`;
const OurSpace = () => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images`;
  const [isShowVideo, setIsShowVideo] = useState<boolean>(false);
  // const [isShowGallery, setIsShowGallery] = useState<boolean>(false);
  function handleClose() {
    setIsShowVideo(false);
  }
  return (
    <>
      <SectionHeading
        title="Culinary Paradise"
        note="Amazing Space, Relaxing and Feeling"
      />
      <OurSpaceWrapper className="my-20 md:w-11/12 xl:w-4/5 mx-auto px-5">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2 text-center sm:text-left sm:pr-12 mx-auto">
            <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-red ">
              A culinary adventure for all the senses.
            </h3>
            <p className="py-4 leading-7">
              A place where food, design, and ambiance come together to create a
              memorable experience. Porro nemo veniam necessitatibus praesentium
              eligendi rem temporibus adipisci quo modi numquam.
            </p>
            <button className="px-5 py-2 bg-green my-6 rounded-xl font-medium transition-all">
              Gallery
            </button>
          </div>
          <div className="mt-14 sm:mt-0 w-full sm:w-1/2 relative overflow-hidden">
            <img
              src={`${ImgBaseUrl}/restaurant/3.jpg`}
              className={`object-contain opacity-70 scale`}
            />
            <button
              className="absolute right-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full p-5 border-yellow max-w-max max-h-max"
              onClick={() => setIsShowVideo(true)}
            >
              <FontAwesomeIcon icon={faPlay} size="sm" />
            </button>
          </div>
        </div>
        {isShowVideo && (
          <Modal
            isOpen={isShowVideo}
            handleOpen={handleClose}
            hasWrapper={false}
          >
            <div className="w-11/12 sm:w-4/5 h-4/5">
              {isShowVideo ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : (
                ''
              )}
            </div>
          </Modal>
        )}
      </OurSpaceWrapper>
    </>
  );
};
export default OurSpace;

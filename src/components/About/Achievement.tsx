import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Modal } from '../Modal';
import Awards from './Awards';
import FeedBack from './FeedBack';

const AchievementWrapper = styled.div`
  > div {
    background-blend-mode: color;
    li > .icon {
      &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        z-index: 0;
        bottom: 0;
        border: 2px solid var(--color-yellow);
      }
      img {
        z-index: 1;
        position: relative;
      }
      &:hover {
        &:after {
          transform: rotate(135deg);
          transition: transform 0.4s linear;
          background: var(--color-green);
        }
      }
    }
  }
`;
const Achievement = () => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images`;
  const [isShowAwards, setIsShowAwards] = useState<boolean>(false);
  const [isShowFeedBack, setIsShowFeedBack] = useState<boolean>(false);

  function handleClose() {
    setIsShowFeedBack(false);
    setIsShowAwards(false);
  }

  return (
    <AchievementWrapper className="mt-24">
      <div
        style={{
          background: `rgba(0,0,0,0.5) url(${ImgBaseUrl}/restaurant/6.jpg) center center / cover no-repeat fixed`,
        }}
      >
        <ul className="flex flex-col sm:flex-row justify-between md:w-11/12 xl:w-4/5 mx-auto px-5 py-12">
          <Link href="/dish" passHref>
            <li>
              <div className="w-1/3 sm:w-1/2 md:w-2/5 mx-auto p-5 sm:p-4 lg:p-6 relative icon cursor-pointer">
                <img src={`${ImgBaseUrl}/services/food-y.png`} />
              </div>
              <p className="text-center py-5 mb-8 sm:mb-0 mt-6 font-medium text-lg text-green">
                More 100 Dishes
              </p>
            </li>
          </Link>
          <li onClick={() => setIsShowAwards(true)}>
            <div className="w-1/3 sm:w-1/2 md:w-2/5 mx-auto p-5 sm:p-4 lg:p-6 relative icon cursor-pointer">
              <img src={`${ImgBaseUrl}/services/award-y.png`} />
            </div>
            <p className="text-center py-5 mb-8 sm:mb-0 mt-6 font-medium text-lg text-green">
              Number of Awards
            </p>
          </li>
          <li onClick={() => setIsShowFeedBack(true)}>
            <div className="w-1/3 sm:w-1/2 md:w-2/5 mx-auto p-5 sm:p-4 lg:p-6 relative icon cursor-pointer">
              <img src={`${ImgBaseUrl}/services/affection-y.png`} />
            </div>
            <p className="text-center py-5 mb-8 sm:mb-0 mt-6 font-medium text-lg text-green">
              10,239 Happy Customer
            </p>
          </li>
          <li>
            <div className="w-1/3 sm:w-1/2 md:w-2/5 mx-auto p-5 sm:p-4 lg:p-6 relative icon">
              <img src={`${ImgBaseUrl}/services/chef-y.png`} />
            </div>
            <p className="text-center py-5 mb-8 sm:mb-0 mt-6 font-medium text-lg text-green">
              More 60 Staffs
            </p>
          </li>
        </ul>
      </div>
      {isShowAwards || isShowFeedBack ? (
        <Modal
          handleOpen={handleClose}
          isOpen={isShowAwards || isShowFeedBack}
          hasWrapper={true}
        >
          {isShowAwards && <Awards />}
          {isShowFeedBack && <FeedBack />}
        </Modal>
      ) : (
        ''
      )}
    </AchievementWrapper>
  );
};
export default Achievement;
